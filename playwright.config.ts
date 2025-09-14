import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddConfig = defineBddConfig({
  paths: ['tests/features/**/*.feature'],
  require: ['tests/steps/**/*.ts'],
  importTestFrom: 'tests/fixtures/fixtures.ts',
});

const playwrightConfig: PlaywrightTestConfig = {
  testDir: './.features-gen',
  testMatch: ['**/*.spec.{js,ts}'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://stage-webapp.honeypotexclusive.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

export default defineConfig({
  ...(bddConfig as PlaywrightTestConfig),
  ...playwrightConfig,
});