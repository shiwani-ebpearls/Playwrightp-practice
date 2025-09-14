import { expect } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";
import { page } from "../support/hooks";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();


let registerPage: RegisterPage;

Given("I am on the onboarding page", async () => {
  registerPage = new RegisterPage(page);
  await registerPage.gotoOnboarding();
});

When("I accept the terms and start registration", async () => {
  await registerPage.acceptTerms();
});

When("I provide my phone number", async () => {
  if (!registerPage) registerPage = new RegisterPage(page);
    const randomPhone = "440" + Math.floor(100000 + Math.random() * 900000).toString();
  await registerPage.enterPhoneNumber(randomPhone);
});

When("I verify my code", async () => {
  await registerPage.verifyCode("123456");
});

When("I set my password", async () => {
  await registerPage.setPassword("Password@1");
});

When("I enter my birthday", async () => {
  await registerPage.enterBirthday("1998", "1");
});

When("I select my gender", async () => {
  await registerPage.selectGender("Female");
});

When("I choose my preferences", async () => {
  await registerPage.choosePreferences();
});

When("I enter my first name", async () => {
  await registerPage.enterFirstName("automationtest2");
});

When("I select my interests", async () => {
  await registerPage.selectInterests();
});

When("I choose what I am looking for", async () => {
  await registerPage.chooseLookingFor();
});

When("I upload my profile images and bio", async () => {
  await registerPage.uploadImagesAndBio();
});

When("I set my location", async () => {
  await registerPage.setLocation("sydney");
});

When("I select a subscription plan", async () => {
  await registerPage.selectSubscription();
});

When("I complete PayPal login and checkout", async () => {
  await registerPage.completePayPal(
    "sb-gp54l39381708@personal.example.com",
    "YE0N0x*R"
  );
});

Then("I should see the start matching option", async () => {
  await expect(page.getByRole("button", { name: "Start matching" })).toBeVisible();
});
