/**
 * Handles the contact action with basic email obfuscation
 * to prevent simple scraper detection.
 */
export function openContact() {
  const u = "ptavasci";
  const d = "gmail.com";
  window.location.href = `mailto:${u}@${d}`;
}
