/*
import{test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { chromium , firefox } from '@playwright/test'
import { Sign } from 'crypto';

test('login test',async()=>{
const browser: Browser = await chromium.launch({headless: false});
const page: Page = await browser.newPage();

await page.goto('https://stage-webapp.honeypotexclusive.com/onboarding');

  const Signin:Locator = await page.locator('body > div > div.MuiBox-root.mui-1grplos > div > div.MuiBox-root.mui-ym9wba > div > div.MuiBox-root.mui-1n1ej56 > button:nth-child(1)');
  await Signin.click();

  const Phone: Locator = await page.locator('input[name="phone"]');
  await Phone.click();
  await Phone.clear();
  await Phone.fill("440056983");

  const Password: Locator = await page.locator('input[name="password"]');
  await Password.fill("Password@1");

  const Continue: Locator = await page.locator('body > div > div.MuiBox-root.mui-1grplos > form > button');
  await Continue.click();

  const title = await page.title();
  console.log("Page Title is: ", title);

  await page.screenshot({path: 'homescreen.png'});

  expect(title).toEqual('Honeypot');

  await browser.close();
}
);

import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "@playwright/test"; 
// Replace with the actual locator for your "Sign in" button
const signInButton = 'button:has-text("Sign in")';
const phoneInput = 'input[name="phone"]';
const passwordInput = 'input[name="password"]';
const submitButton = 'button[type="submit"]';

Given('I navigate to {string}', async function (url: string) {
  await page.goto(url);
});

Given('I click on "Sign in"', async function () {
  await page.click(signInButton);
});

When('I login with phone {string} and password {string}', async function (phone: string, password: string) {
  await page.fill(phoneInput, phone);
  await page.fill(passwordInput, password);
  await page.click(submitButton);
});

Then('I should see the homepage', async function () {
  await expect(page).toHaveURL(/dashboard|home|exclusive/i); 
  // adjust regex or use element verification for homepage
});
*/

// tests/steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { test, expect } from '../Fixtures/Fixtures';
import { LoginObj } from '../Pages/Loginobj';

const { Given, When, Then } = createBdd(test);

let loginPage: LoginObj;

Given('I navigate to {string}', async ({ page }, url) => {
  loginPage = new LoginObj(page);
  await loginPage.goto(url);
});

When('I click on {string}', async ({}, buttonName) => {
  if (buttonName === "Sign in") {
    await loginPage.clickSignIn();
  } else if (buttonName === "Continue") {
    await loginPage.clickContinue();
  }
});

When('I login with phone {string} and password {string}', async ({}, phone, password) => {
  await loginPage.login(phone, password);
});

Then('I should be redirected to {string}', async ({}, expectedUrl) => {
  await loginPage.assertRedirectedTo(expectedUrl);
});

Then('I should verify user is not able to login and url contains {string}', async ({}, login_url) => {
  await loginPage.assertLoginFailed(login_url);
});