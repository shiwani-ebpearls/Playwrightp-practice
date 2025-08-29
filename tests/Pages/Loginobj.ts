// tests/pages/LoginObj.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginObj {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('button:has-text("Sign in")');
    this.phoneInput = page.locator('input[name="phone"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.continueButton = page.locator('button:has-text("Continue")');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async login(phone: string, password: string) {
    await this.phoneInput.fill(phone);
    await this.passwordInput.fill(password);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async assertRedirectedTo(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async assertLoginFailed(expectedUrlPart: string) {
    await expect(this.page).toHaveURL(new RegExp(expectedUrlPart));
  }
}