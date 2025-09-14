import { Page, Locator } from "@playwright/test";
import path from "path";

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoOnboarding() {
    await this.page.goto("https://stage-webapp.honeypotexclusive.com/onboarding");
  }

  async acceptTerms() {
    await this.page.getByRole("checkbox", { name: "By continuing you agree to" }).check();
    await this.page.getByRole("button", { name: "Create an account" }).click();
  }

  async enterPhoneNumber(phone: string) {

    await this.page.getByRole("textbox").fill(phone);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async verifyCode(code: string) {
    const digits = code.split("");
    for (let i = 0; i < digits.length; i++) {
      await this.page.getByRole("textbox", { name: `Character ${i + 1}` }).fill(digits[i]);
    }
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async setPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Enter new password" }).fill(password);
    await this.page.getByRole("textbox", { name: "Re-enter password" }).fill(password);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async enterBirthday(year: string, day: string) {
    await this.page.getByText("DD/MM/YYYY").click();
    await this.page.getByRole("button", { name: "Choose date" }).click();
    await this.page.getByRole("button", { name: "calendar view is open, switch" }).click();
    await this.page.getByRole("radio", { name: year }).click();
    await this.page.getByRole("gridcell", { name: day, exact: true }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async selectGender(gender: string) {
    await this.page.getByRole("button", { name: gender }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async choosePreferences() {
    await this.page.getByRole("button", { name: "Straight" }).first().click();
    await this.page.getByRole("button", { name: "Male", exact: true }).click();
    await this.page.getByRole("button", { name: "Straight" }).nth(1).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async enterFirstName(name: string) {
    await this.page.getByRole("textbox", { name: "John" }).fill(name);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async selectInterests() {
    await this.page.getByRole("button", { name: "Running", exact: true }).click();
    await this.page.getByRole("button", { name: "Concerts and live music" }).click();
    await this.page.getByRole("button", { name: "Vegan or vegetarian cooking" }).click();
    await this.page.getByRole("button", { name: "Basketball Tennis" }).click();
    await this.page.getByRole("button", { name: "Food Photography" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async chooseLookingFor() {
    await this.page.getByRole("button", { name: "Networking opportunities" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async uploadImagesAndBio() {

    const images = [
      "pexels-guilhermealmeida-1858175.jpg",
      "pexels-olly-774909.jpg",
      "pexels-moose-photos-170195-1036623.jpg",
    ];

    // Locate all hidden file inputs under labels
    const fileInputs = this.page.locator('label.MuiBox-root.mui-3m8j6n > input[type="file"]');

    // Upload images one by one
    for (let i = 0; i < images.length; i++) {
      const filePath = path.resolve(__dirname, "../downloads", images[i]);

      // Set the file on the corresponding input
      await fileInputs.nth(i).setInputFiles(filePath);

      // Wait for preview to appear
      const preview = this.page.locator('.MuiBox-root.mui-gk1t2e img').nth(i);
      if ((await preview.count()) > 0) {
        await preview.waitFor({ state: "visible", timeout: 5000 });
      } else {
        await this.page.waitForTimeout(500); // fallback
      }
    }

    // Fill bio textarea
    const bioTextarea = this.page.locator('textarea[name="bio"]');
    await bioTextarea.fill("This is test honey user");

    // Click Continue button
    const continueBtn = this.page.locator('button[type="submit"]');
    await continueBtn.waitFor({ state: 'visible', timeout: 10000 });

    // Click safely
    await continueBtn.click();

  }



  async setLocation(location: string) {
    await this.page.getByRole("combobox", { name: "Enter your location here" }).fill(location);
    await this.page.getByRole("option", { name: "Sydney Opera House Sydney NSW" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async selectSubscription() {
    await this.page.getByRole("button", { name: "Honey" }).click();
    await this.page.locator("div").filter({ hasText: /^Monthly$/ }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async completePayPal(email: string, password: string) {
    await this.page.getByRole("textbox", { name: "Email or mobile number" }).fill(email);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Log In" }).click();
    await this.page.getByRole("button", { name: "Continue" }).click();
    await this.page.locator('[data-test-id="continueButton"]').click();
  }

  async startMatching() {
    await this.page.getByRole("button", { name: "Start matching" }).click();
  }
}
