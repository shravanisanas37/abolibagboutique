import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { dataStore } from '../lib/store';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [looks, setLooks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Subscribe to real-time updates
  useEffect(() => {
    setLoading(true);
    setError(null);

    const unsubscribe = dataStore.subscribeToProducts((updatedProducts) => {
      setProducts(updatedProducts);
      setLoading(false);
    });

    setLooks(dataStore.getLooks());
    setTestimonials(dataStore.getTestimonials());

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  // Helper to check if a product is a New Arrival (within 30 days)
  const isNewArrival = useCallback((product) => {
    if (!product.created_at) return false;
    const itemDate = new Date(product.created_at).getTime();
    const thirtyDaysAgo = Date.now() - 30 * 86400000;
    return itemDate >= thirtyDaysAgo || product.badge === 'new';
  }, []);

  // Helper to check if a product is on Sale
  const isOfferSale = useCallback((product) => {
    return Boolean(product.original_price && Number(product.original_price) > Number(product.price)) || product.badge === 'sale';
  }, []);

  // Featured products for homepage
  const featuredProducts = useMemo(() => {
    return products.filter(p => p.featured && p.availability !== 'sold');
  }, [products]);

  // Product CRUD
  const addProduct = async (productData) => {
    try {
      const created = await dataStore.addProduct(productData);
      return created;
    } catch (err) {
      console.error('Failed to add product:', err);
      throw err;
    }
  };

  const updateProduct = async (id, updates) => {
    try {
      const updated = await dataStore.updateProduct(id, updates);
      return updated;
    } catch (err) {
      console.error('Failed to update product:', err);
      throw err;
    }
  };

  const deleteProduct = async (id) => {
    try {
      await dataStore.deleteProduct(id);
    } catch (err) {
      console.error('Failed to delete product:', err);
      throw err;
    }
  };

  const toggleAvailability = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'in_stock' ? 'out_of_stock' : currentStatus === 'out_of_stock' ? 'sold' : 'in_stock';
    return updateProduct(id, { availability: nextStatus });
  };

  const toggleFeatured = async (id, currentFeatured) => {
    return updateProduct(id, { featured: !currentFeatured });
  };

  const getProductBySlug = useCallback((slug) => {
    return products.find(p => p.slug === slug);
  }, [products]);

  const value = {
    products,
    looks,
    testimonials,
    loading,
    error,
    featuredProducts,
    isNewArrival,
    isOfferSale,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleAvailability,
    toggleFeatured,
    getProductBySlug,
    refreshProducts: () => dataStore.getProducts().then(setProducts)
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
