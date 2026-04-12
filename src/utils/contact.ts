/**
 * Handles the contact action with basic email obfuscation
 * to prevent simple scraper detection.
 */
export function openContact() {
  window.dispatchEvent(new Event("openContactModal"));
}
