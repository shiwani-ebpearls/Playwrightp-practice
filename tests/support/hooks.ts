import { chromium, Browser, Page } from "@playwright/test";

import { createBdd } from 'playwright-bdd';

const { Before, After } = createBdd();



let browser: Browser;
export let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await browser.close();
});
