import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2023",
    },
  },
  plugins: [tsconfigPaths()],
});
