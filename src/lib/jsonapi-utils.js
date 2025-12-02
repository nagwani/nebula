/**
 * Mock JSON API utilities for Storybook development.
 * In production, these would work with actual Drupal JSON API responses.
 */

/**
 * Sorts menu items by weight and returns them in order.
 * For mock purposes, just returns the items as-is since they're already ordered.
 * @param {Array} menuItems - Array of menu items
 * @returns {Array} Sorted menu items
 */
export function sortMenu(menuItems) {
  if (!menuItems) return [];
  // In production, this would sort by weight property
  // For mock, we assume items are already in correct order
  return Array.isArray(menuItems) ? menuItems : [];
}
