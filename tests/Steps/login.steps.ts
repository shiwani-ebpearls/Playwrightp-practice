
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();


// Generic click step - handles any button/link with text
Given('I click on {string}', async ({ page }, buttonText: string) => {
  await page.locator(`button:has-text("${buttonText}"), a:has-text("${buttonText}"), [role="button"]:has-text("${buttonText}")`).click();
});

// Login with phone and password
When('I login with phone {string} and password {string}', async ({ page }, phone: string, password: string) => {
  // Enter phone number
  await page.locator('input[name="phone"], input[type="tel"], input[placeholder*="phone" i]').fill(phone);
  
  // Enter password
  await page.locator('input[name="password"], input[type="password"]').fill(password);
});

// Verification step for login failure
Then('I should verify user is not able to login and url contains {string}', async ({ page }, expectedUrl: string) => {
  // Wait a bit for any navigation attempts
  await page.waitForTimeout(2000);
  
  // Check that we're still on the login page (login failed)
  await expect(page).toHaveURL(new RegExp(expectedUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  
  // Additional checks for login failure indicators
  const loginFailureIndicators = [
    page.locator('text=Invalid credentials'),
    page.locator('text=Login failed'),
    page.locator('text=Incorrect phone or password'),
    page.locator('[data-testid="error-message"]'),
    page.locator('.error-message'),
    page.locator('input[name="phone"], input[type="tel"]') // Still on login form
  ];
  
  // Check if any login failure indicator is present
  let loginFailureDetected = false;
  for (const indicator of loginFailureIndicators) {
    try {
      await expect(indicator).toBeVisible({ timeout: 1000 });
      loginFailureDetected = true;
      break;
    } catch {
      // Continue to next indicator
    }
  }
  
  // If no specific error message, at least verify we're still on login page
  if (!loginFailureDetected) {
    console.log('No specific login failure message found, but URL indicates we are still on login page');
  }
});