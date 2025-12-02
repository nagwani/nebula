/**
 * Mock implementation of @drupal-api-client/json-api-client for local development.
 * Returns mock data for development/testing.
 *
 * @todo Remove this file after https://drupal.org/i/3560419.
 */

// Mock navigation menu data - flat array format expected by sortMenu
const mockMenuData = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "Products", url: "/products" },
  { id: "3", title: "Services", url: "/services" },
  { id: "4", title: "About", url: "/about" },
  { id: "5", title: "Contact", url: "/contact" },
];

// Mock search results data
const mockSearchResults = [
  {
    title: "Getting Started with React",
    path: { alias: "/blog/getting-started-react" },
  },
  {
    title: "Building Modern Web Applications",
    path: { alias: "/blog/modern-web-apps" },
  },
  {
    title: "Introduction to Tailwind CSS",
    path: { alias: "/blog/tailwind-intro" },
  },
  {
    title: "Component-Driven Development",
    path: { alias: "/blog/component-driven" },
  },
  {
    title: "Best Practices for Code Organization",
    path: { alias: "/blog/code-organization" },
  },
];

export class JsonApiClient {
  constructor() {
    // No baseUrl required for mock
  }

  /**
   * Mock getResource - returns menu data for menu_items
   * @param {string} type - Resource type
   * @returns {Promise<Array>}
   */
  async getResource(type) {
    if (type === "menu_items") {
      return mockMenuData;
    }
    return [];
  }

  /**
   * Mock getCollection - returns search results for index queries
   * @param {string} type - Resource type
   * @returns {Promise<Array>}
   */
  async getCollection(type) {
    if (type === "index--cms_content") {
      return mockSearchResults;
    }
    return [];
  }
}

export default JsonApiClient;
