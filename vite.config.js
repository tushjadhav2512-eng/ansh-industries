import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT FOR GITHUB PAGES
  base: "/ansh-industries/",

  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
      "/uploads": "http://localhost:5000"
    }
  },

  build: {
    chunkSizeWarningLimit: 900,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          charts: ["recharts"],
          icons: ["lucide-react"]
        }
      }
    }
  }
});
