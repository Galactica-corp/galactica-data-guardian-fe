import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { checker } from "vite-plugin-checker";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import removeConsole from "vite-plugin-remove-console";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const isDev = mode === "development";

  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(),
      nodePolyfills(),
      isProd && removeConsole(),
      isDev &&
        checker({
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
          },
          overlay: {
            initialIsOpen: false,
          },
          typescript: true,
        }),
    ],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_GRAPHQL_SERVER,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: process.env.PROFILER
        ? [
            { find: /^react-dom$/, replacement: "react-dom/profiling" },
            {
              find: "scheduler/tracing",
              replacement: "scheduler/tracing-profiling",
            },
          ]
        : [],
    },
  };
});
