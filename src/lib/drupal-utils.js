/**
 * Mock Drupal utilities for Storybook development.
 * In production, these would be provided by Drupal Canvas.
 */

/**
 * Returns mock page data including breadcrumbs.
 * @returns {{ breadcrumbs: Array<{ key: string, text: string, url: string | null }> }}
 */
export function getPageData() {
  return {
    breadcrumbs: [
      { key: "home", text: "Home", url: "/" },
      { key: "products", text: "Products", url: "/products" },
      { key: "category", text: "Category", url: "/products/category" },
      { key: "current", text: "Current Page", url: null },
    ],
  };
}

/**
 * Returns mock site data including branding information.
 * @returns {{ branding: { homeUrl: string, siteName: string } }}
 */
export function getSiteData() {
  return {
    branding: {
      homeUrl: "/",
      siteName: "Nebula",
    },
  };
}
