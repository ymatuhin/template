import { defineConfig } from "vite";
import svelte from "rollup-plugin-svelte";

import sveltePreprocess from "svelte-preprocess";
import legacy from "@vitejs/plugin-legacy";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {},
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        hydratable: isProd,
        dev: !isProd,
      },
    }),
    legacy(),
  ].filter(Boolean),
});
