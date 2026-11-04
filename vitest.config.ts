import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Unit and component tests. Kept apart from vite.config.ts so the production
// build configuration is untouched.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./src/test/setup.ts"],
    // Every test starts clean: no leftover mocks, stubbed env vars or globals.
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
