import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// Shared navigation step - only defined once
Given('I navigate to {string}', async ({ page }, url: string) => {
  await page.goto(url);
});

// Other shared steps that might be used across multiple features
Then('I should be redirected to {string}', async ({ page }, expectedUrl: string) => {
  await expect(page).toHaveURL(expectedUrl);
});

When('I check the terms and conditions checkbox', async ({ page }) => {
  await page.locator('input[type="checkbox"]').check();
});