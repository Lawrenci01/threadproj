import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3007,
    // Get rid of the CORS error
    proxy: {
      "/api": {
        target: "http://localhost:3006",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist", // Ensures the build output goes to the 'dist' directory
  },
});
