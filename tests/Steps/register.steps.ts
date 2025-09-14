import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

const { Given, When, Then } = createBdd();

let registerPage: RegisterPage;


// Initialize page object after navigation (use page fixture)
Given('I am on the registration page', async ({ page }) => {
  registerPage = new RegisterPage(page);
});

// Registration specific steps
When('I click on "Create an account" button', async ({ page }) => {
  await page.locator('button:has-text("Create an account")').click();
});

When('I enter phone number {string} in the "My number is" field', async ({ page }, phone: string) => {
  if (!registerPage) registerPage = new RegisterPage(page);
    const randomPhone = "440" + Math.floor(100000 + Math.random() * 900000).toString();
await registerPage.enterPhoneNumber(randomPhone);
});

When('I click on the registration continue button', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.clickRegistrationContinue();
});


When('I enter OTP {string} in the OTP input field', async ({ page }, otp: string) => {
  if (!registerPage) registerPage = new RegisterPage(page);

  // Wait until at least the first OTP box is visible
  await expect(registerPage.otpInputField.first()).toBeVisible( );

  // Fill the OTP digits
  await registerPage.enterOtp(otp);
});

When('I click on the OTP continue button', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.clickOtpContinue();
});

Then('I should be redirected to the Password setup page', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await expect(registerPage.passwordField).toBeVisible();
});

When('I enter password {string} in the password field', async ({ page }, password: string) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.enterPassword(password);
});

When('I click on the password continue button', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.clickPasswordContinue();
});

Then('I should be redirected to the Profile creation page', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await expect(registerPage.profileCreationText).toBeVisible( );
});

When('I enter password and new Password {string} in the password and confirm password fields', async ({ page }, password: string) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.enterProfilePasswords(password, password);
});

When('I click on the profile creation continue button', async ({ page }) => {
  if (!registerPage) registerPage = new RegisterPage(page);
  await registerPage.clickProfileContinue();
});

Then('I should be redirected to the My Birthday is page', async ({ page }) => {
  await expect(page.locator('text=My Birthday is')).toBeVisible();
});

