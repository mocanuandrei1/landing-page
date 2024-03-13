import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), compression()],
  base: "/landing-page/",
  define: {
    "process.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
      process.env.VITE_EMAILJS_PUBLIC_KEY
    ),
  },
});
