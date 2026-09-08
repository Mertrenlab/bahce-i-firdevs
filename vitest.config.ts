import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": `${import.meta.dirname}/src` },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/setup.ts"],
    include: ["src/__tests__/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      // Next owns the document shell and metadata injection; verify those in the build/browser.
      exclude: ["src/__tests__/**", "src/app/layout.tsx"],
      thresholds: {
        lines: 85,
        branches: 80,
        functions: 85,
        statements: 85,
        "src/lib/ordering.ts": { lines: 100, branches: 100 },
        "src/data/products.ts": { lines: 100, branches: 100 },
        "src/app/urunler/[[]slug[]]/page.tsx": { lines: 100, branches: 100 },
      },
    },
  },
});
