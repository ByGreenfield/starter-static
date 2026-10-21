import { defineConfig, devices } from '@playwright/test';

/**
 * Smoke suite. BASE_URL points it at any deployment (a Render preview, production after a
 * release); without it, the suite serves the local static build from ./out.
 */
const baseURL = process.env.BASE_URL ?? 'http://localhost:3100';

export default defineConfig({
  testDir: 'tests/smoke',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [{ name: 'mobile-chromium', use: { ...devices['Pixel 7'] } }],
  ...(process.env.BASE_URL
    ? {}
    : {
        webServer: {
          command: 'pnpm exec serve out -l 3100 --no-clipboard',
          url: 'http://localhost:3100',
          reuseExistingServer: !process.env.CI,
          timeout: 30_000,
        },
      }),
});
