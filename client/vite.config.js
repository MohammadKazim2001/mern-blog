import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import flowbiteReact from "flowbite-react/plugin/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    flowbiteReact(),
    nodePolyfills({
      // Specific polyfills you need
      include: ["path", "url", "events"],
    }),
  ],
});
