import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly phoneInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneInput = page.locator('input[placeholder="My number is"]');
    this.continueButton = page.locator('button:has-text("Continue")');
  }

  async enterPhoneNumber(phone: string) {
    await this.phoneInput.click();
    await this.phoneInput.fill(phone);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}