import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import preactRefresh from "@prefresh/vite";

const legacyPlugin = process.env.BUILD_SERVER ? undefined : legacy();

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [preactRefresh(), legacyPlugin].filter(Boolean),
});
