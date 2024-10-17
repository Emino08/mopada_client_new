import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  define: {
    "import.meta.env.MODE": JSON.stringify(process.env.NODE_ENV),
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  server: {
    port: 3000,
    open: "/",
  },
  preview: {
    port: 3000,
  },
});
