import { Page, Locator, expect } from '@playwright/test';

export class OnboardingPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('input[type="checkbox"].PrivateSwitchBase-input');
    this.createAccountButton = page.locator('button:has-text("Create an account")');
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async checkTermsCheckbox() {
    await this.checkbox.check();
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  async assertRedirectedTo(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}