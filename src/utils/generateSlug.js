/**
 * Generate a URL-safe slug from a string
 * @param {string} text 
 * @returns {string}
 */
export function generateSlug(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
