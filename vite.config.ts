import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Pablo Tavasci Dozo | Software Architect",
        short_name: "Portfolio",
        description:
          "Pablo Tavasci Dozo - Arquitecto de Software & Líder Técnico con +25 años de experiencia",
        theme_color: "#ff5c00",
        background_color: "#09090b",
        display: "standalone",
        icons: [
          {
            src: "favicon.svg",
            sizes: "192x192 512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
