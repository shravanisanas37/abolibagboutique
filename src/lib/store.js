import { supabase, isSupabaseConfigured } from './supabaseClient';
import { initialProducts, initialLooks, initialTestimonials } from './initialData';

const PRODUCTS_STORAGE_KEY = 'aboli_products_admin_v2';
const LOOKS_STORAGE_KEY = 'aboli_looks_v1';
const TESTIMONIALS_STORAGE_KEY = 'aboli_testimonials_v1';

// Setup BroadcastChannel for real-time cross-tab sync in all modern browsers
const broadcastChannel = typeof BroadcastChannel !== 'undefined' 
  ? new BroadcastChannel('aboli_realtime_sync') 
  : null;

function getLocalData(key, fallback = []) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return fallback;
  }
}

function setLocalData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'DATA_UPDATE', key, timestamp: Date.now() });
    }
  } catch (err) {
    console.error(`Error saving ${key} to storage:`, err);
  }
}

export const dataStore = {
  // Listen to realtime changes
  subscribeToProducts(callback) {
    let supabaseChannel = null;

    // 1. If Supabase is configured, use Supabase Realtime subscription
    if (isSupabaseConfigured && supabase) {
      // Initial fetch from Supabase
      supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
        .then(({ data, error }) => {
          if (!error && Array.isArray(data)) {
            if (data.length > 0) {
              callback(data);
              setLocalData(PRODUCTS_STORAGE_KEY, data);
            } else {
              // If DB is empty, check if we have local cache or initial products
              const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
              callback(local);
            }
          } else {
            console.warn('Supabase initial fetch failed, falling back to cache:', error);
            callback(getLocalData(PRODUCTS_STORAGE_KEY, initialProducts));
          }
        });

      // Realtime listener
      supabaseChannel = supabase
        .channel('public:products')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, async () => {
          const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });
          if (!error && Array.isArray(data)) {
            callback(data);
            setLocalData(PRODUCTS_STORAGE_KEY, data);
          }
        })
        .subscribe();
    } else {
      // 2. Deliver initial local data
      callback(getLocalData(PRODUCTS_STORAGE_KEY, initialProducts));
    }

    // Cross-tab broadcast listener
    const handleBroadcast = (event) => {
      if (event.data?.key === PRODUCTS_STORAGE_KEY) {
        callback(getLocalData(PRODUCTS_STORAGE_KEY, initialProducts));
      }
    };

    if (broadcastChannel) {
      broadcastChannel.addEventListener('message', handleBroadcast);
    }

    const handleStorageEvent = (e) => {
      if (e.key === PRODUCTS_STORAGE_KEY) {
        callback(getLocalData(PRODUCTS_STORAGE_KEY, initialProducts));
      }
    };
    window.addEventListener('storage', handleStorageEvent);

    // Unsubscribe cleanup
    return () => {
      if (supabaseChannel && supabase) {
        supabase.removeChannel(supabaseChannel);
      }
      if (broadcastChannel) {
        broadcastChannel.removeEventListener('message', handleBroadcast);
      }
      window.removeEventListener('storage', handleStorageEvent);
    };
  },

  // Get all products
  async getProducts() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && Array.isArray(data) && data.length > 0) return data;
      } catch (err) {
        console.warn('Supabase fetch failed, using local storage:', err);
      }
    }
    return getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
  },

  // Add Product
  async addProduct(productData) {
    const newProduct = {
      ...productData,
      id: productData.id || crypto.randomUUID(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase
        .from('products')
        .insert([newProduct])
        .select()
        .single();
      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }
      if (data) {
        const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
        setLocalData(PRODUCTS_STORAGE_KEY, [data, ...local.filter(p => p.id !== data.id)]);
        return data;
      }
    }

    const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
    const updated = [newProduct, ...local];
    setLocalData(PRODUCTS_STORAGE_KEY, updated);
    return newProduct;
  },

  // Update Product
  async updateProduct(id, updates) {
    const updatedFields = {
      ...updates,
      updated_at: new Date().toISOString()
    };

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase
        .from('products')
        .update(updatedFields)
        .eq('id', id)
        .select()
        .single();
      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }
      if (data) {
        const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
        const updated = local.map(p => p.id === id ? data : p);
        setLocalData(PRODUCTS_STORAGE_KEY, updated);
        return data;
      }
    }

    const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
    const updated = local.map(p => p.id === id ? { ...p, ...updatedFields } : p);
    setLocalData(PRODUCTS_STORAGE_KEY, updated);
    return updated.find(p => p.id === id);
  },

  // Delete Product
  async deleteProduct(id) {
    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) {
        console.error('Supabase delete error:', error);
        throw error;
      }
    }

    const local = getLocalData(PRODUCTS_STORAGE_KEY, initialProducts);
    const updated = local.filter(p => p.id !== id);
    setLocalData(PRODUCTS_STORAGE_KEY, updated);
    return true;
  },

  // Looks
  getLooks() {
    return getLocalData(LOOKS_STORAGE_KEY, initialLooks);
  },

  // Testimonials
  getTestimonials() {
    return getLocalData(TESTIMONIALS_STORAGE_KEY, initialTestimonials);
  }
};
