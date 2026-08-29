export const DEFAULT_WHATSAPP_NUMBER = '919082140384';

/**
 * Generate a WhatsApp Web/App deep link
 * @param {string} text - URL-encoded message text
 * @param {string} [phoneNumber] - Optional override phone number
 * @returns {string}
 */
export function getWhatsAppUrl(text, phoneNumber = DEFAULT_WHATSAPP_NUMBER) {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Build WhatsApp message for product delivery order (PRD Flow 1 & §1.7)
 * @param {Object} product
 * @returns {string}
 */
export function buildProductDeliveryMessage(product) {
  const priceText = product.price ? ` (₹${product.price})` : '';
  return `Hi Aboli Bag Boutique, I'd like to order "${product.name}"${priceText} for delivery. Please share delivery charges and payment details.`;
}

/**
 * Build WhatsApp message for checking stock / in-store visit inquiry
 * @param {Object} product
 * @returns {string}
 */
export function buildStockInquiryMessage(product) {
  return `Hi Aboli Bag Boutique, I am interested in "${product.name}". Could you please verify if it is currently in stock at your Satara boutique?`;
}

/**
 * Build WhatsApp message for Contact Page form submission
 * @param {Object} formData { name, productInterest, message }
 * @returns {string}
 */
export function buildContactFormMessage({ name, productInterest, message }) {
  let msg = `Hi Aboli Bag Boutique,\n\n`;
  msg += `*Name:* ${name || 'Customer'}\n`;
  if (productInterest && productInterest !== 'General Inquiry') {
    msg += `*Interest:* ${productInterest}\n`;
  }
  msg += `*Message:* ${message}\n\n`;
  msg += `Looking forward to your reply.`;
  return msg;
}

/**
 * General founder styling / custom gifting message
 * @param {string} [topic]
 * @returns {string}
 */
export function buildFounderInquiryMessage(topic = 'Custom Gifting & Styling') {
  return `Hi Aboli Bag Boutique Founder, I would like to inquire about your ${topic} service.`;
}

/**
 * Safe link opener that attempts to open WhatsApp and returns true if opened
 * @param {string} url
 * @returns {boolean}
 */
export function openWhatsApp(url) {
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked or not supported
      window.location.href = url;
    }
    return true;
  } catch (err) {
    console.error('Failed to open WhatsApp window:', err);
    window.location.href = url;
    return false;
  }
}
