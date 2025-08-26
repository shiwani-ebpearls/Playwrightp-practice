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

import{createBdd} from 'playwright-bdd';

const {Given, When , Then} =createBdd();

import { expect, Expect } from '@playwright/test';

Given('I navigate to {string}', async ({page}, url) => {
  await page.goto(url)
  // Step: Given I navigate to "https://stage-webapp.honeypotexclusive.com/onboarding"
  // From: MyTestPractice/login.feature:5:2
});

Given('I click on {string}', async ({page}, Sign_in) => {
  await page.locator('//button[contains(@class,"MuiButton-contained") and text()="Sign in"]',Sign_in).click();

  // Step: And I click on "Sign_in"
  // From: MyTestPractice/login.feature:6:2
});

When('I login with phone {string} and password {string}', async ({page}, Phone_no, Password) => {
   await page.locator('//input[@name="phone"]', Phone_no).fill(Phone_no);
   await page.locator('//input[@name="password"]', Password).fill(Password);
  // Step: When I login with phone "0456 321 100" and password "Password@1"
  // From: MyTestPractice/login.feature:7:2
});

Then('I should see the homepage', async ({page}, logged_url) => {
 await expect (page).toHaveURL(new RegExp(logged_url)); 

  // Step: Then I should see the homepage
  // From: MyTestPractice/login.feature:8:2
});