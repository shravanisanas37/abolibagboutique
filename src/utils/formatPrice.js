/**
 * Format price in Indian Rupee format (e.g. ₹1,299 or ₹899)
 * @param {number|string} price 
 * @returns {string}
 */
export function formatPrice(price) {
  if (price === undefined || price === null || isNaN(Number(price))) {
    return '₹0';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(price));
}

/**
 * Calculate discount percentage between original price and current price
 * @param {number} currentPrice 
 * @param {number} originalPrice 
 * @returns {number|null}
 */
export function calculateDiscount(currentPrice, originalPrice) {
  if (!originalPrice || originalPrice <= currentPrice) return null;
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  return discount > 0 ? discount : null;
}
