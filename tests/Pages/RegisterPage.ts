// tests/Pages/RegisterPage.ts
import { Page, Locator } from '@playwright/test';

export class RegisterPage {
readonly page: Page;

// Locators
readonly phoneNumberField: Locator;
readonly registrationContinueButton: Locator;
readonly otpInputField: Locator;
readonly otpContinueButton: Locator;
readonly passwordField: Locator;
readonly passwordContinueButton: Locator;
readonly profileCreationText: Locator;
readonly newPasswordField: Locator;
readonly reEnterPasswordField: Locator;
readonly profileContinueButton: Locator;

constructor(page: Page) {
this.page = page;

// Phone number field
this.phoneNumberField = page.locator('input[name="phone"]');

// Registration continue button
this.registrationContinueButton = page.locator('button:has-text("Continue")');

// OTP input fields (select the first OTP box to avoid strict mode violation)
// OTP input fields (all boxes)
this.otpInputField = page.locator('input[aria-label^="Character"]');

// OTP continue button
this.otpContinueButton = page.locator('button:has-text("Continue")');

// Password setup page
this.passwordField = page.locator('input[name="password"]');
this.passwordContinueButton = page.locator('button:has-text("Continue")');

// Profile creation page
this.profileCreationText = page.locator('text=Create your profile');
this.newPasswordField = page.locator('input[name="password"]');
this.reEnterPasswordField = page.locator('input[name="rePassword"]');
this.profileContinueButton = page.locator('button:has-text("Continue")');


}

/** Enter phone number */
async enterPhoneNumber(phone: string) {
await this.phoneNumberField.fill(phone);
}

/** Click registration continue */
async clickRegistrationContinue() {
await this.registrationContinueButton.click();
}

/** Enter OTP digits */
async enterOtp(otp: string) {
const otpDigits = otp.split('');
for (let i = 0; i < otpDigits.length; i++) {
await this.page.locator(`input[aria-label="Character ${i + 1}"]`).fill(otpDigits[i]);
}
}



/** Click OTP continue */
async clickOtpContinue() {
await this.otpContinueButton.click();
}

/** Enter password on password setup page */
async enterPassword(password: string) {
await this.passwordField.fill(password);
}

/** Click password continue button */
async clickPasswordContinue() {
await this.passwordContinueButton.click();
}

/** Enter new and confirm password on profile creation page */
async enterProfilePasswords(newPassword: string, confirmPassword: string) {
await this.newPasswordField.fill(newPassword);
await this.reEnterPasswordField.fill(confirmPassword);
}

/** Click continue on profile creation page */
async clickProfileContinue() {
await this.profileContinueButton.click();
}}