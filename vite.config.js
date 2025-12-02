import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const DIR = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/components": path.resolve(DIR, "./src/components"),
      // All @/lib imports point to mocks for local development.
      // @todo Remove after https://drupal.org/i/3560419.
      "@/lib": path.resolve(DIR, "./src/lib/mocks"),
      "@drupal-api-client/json-api-client": path.resolve(
        DIR,
        "./src/lib/mocks/drupal-api-client-json-api-client.js",
      ),
      "next-image-standalone": path.resolve(
        DIR,
        "./src/lib/mocks/next-image-standalone.jsx",
      ),
    },
  },
});
