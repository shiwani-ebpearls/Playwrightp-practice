// tests/fixtures/fixtures.ts
import { expect, Page, BrowserContext } from '@playwright/test';
import { test as bdd } from 'playwright-bdd';   // ✅ import BDD test

type Fixtures = {
  page: Page;
  context: BrowserContext;
};

// extend BDD test, not playwright base
export const test = bdd.extend<Fixtures>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },
});

export { expect };