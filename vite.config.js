import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Позволяет подключаться к серверу с других устройств в сети
    port: 3000, // Убедись, что порт 3000 свободен
  },
});
