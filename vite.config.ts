import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      manifest: {
        display: "standalone",
        display_override: ["window-controls-overlay"],
        lang: "es-ES",
        name: "DNI",
        short_name: "DNI",
        description: "DNI aplication",
        theme_color: "#fff",
        icons: [
          {
            src: "/img/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose:"any"
          },
          {
            src: "/img/pwa-520x520.png",
            sizes: "520x520",
            type: "image/png",
            purpose:"maskable"
          },
        ],
      },
    }),
  ],
});
