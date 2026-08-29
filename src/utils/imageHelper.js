import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

/**
 * Compress an uploaded image file on the client to a Blob
 * @param {File} file 
 * @param {number} maxWidth 
 * @param {number} maxHeight 
 * @param {number} quality 
 * @returns {Promise<Blob>} Image Blob
 */
export async function compressImageToBlob(file, maxWidth = 1200, maxHeight = 1500, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Canvas toBlob conversion failed'));
            }
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

/**
 * Compress an uploaded image file on the client before saving/uploading
 * @param {File} file 
 * @param {number} maxWidth 
 * @param {number} maxHeight 
 * @param {number} quality 
 * @returns {Promise<string>} Data URL
 */
export async function compressImage(file, maxWidth = 1200, maxHeight = 1500, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

/**
 * Upload a product image to Supabase Storage ('product-images' bucket)
 * Falls back to compressed data URL if Supabase is offline or storage is unreachable.
 * @param {File} file 
 * @returns {Promise<string>} Public URL or Data URL
 */
export async function uploadProductImage(file) {
  if (!file) return null;

  try {
    const blob = await compressImageToBlob(file);

    if (isSupabaseConfigured && supabase) {
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 9);
      const cleanName = (file.name || 'image')
        .replace(/[^a-zA-Z0-9.-]/g, '_')
        .toLowerCase();
      const filePath = `products/${timestamp}_${randomStr}_${cleanName}.jpg`;

      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(filePath, blob, {
          contentType: 'image/jpeg',
          upsert: true
        });

      if (!error && data) {
        const { data: urlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);

        if (urlData?.publicUrl) {
          return urlData.publicUrl;
        }
      } else if (error) {
        console.warn('Supabase storage upload returned error, using fallback:', error.message || error);
      }
    }
  } catch (err) {
    console.warn('Supabase storage upload error, fallback to data URL:', err);
  }

  // Fallback to compressed Data URL
  return compressImage(file);
}

