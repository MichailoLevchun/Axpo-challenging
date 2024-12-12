import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    baseURL: 'https://opendata.aemet.es/centrodedescargas/inicio',
    trace: 'on-first-retry',
  },
});