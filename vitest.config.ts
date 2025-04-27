import { defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const { default: tsconfigPaths } = await import("vite-tsconfig-paths");

  return {
    plugins: [tsconfigPaths()],
    resolve: { alias: { "@": "/src" } },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test/setup.ts",
      include: ["**/*.spec.{ts,tsx}"],
    },
  };
});
