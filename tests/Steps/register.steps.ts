import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/Fixtures';
import { RegisterPage } from '../Pages/RegisterPage';

const { When } = createBdd(test);

let registerPage: RegisterPage;

When('I enter phone number {string} in the "My number is" field', async ({ page }, phone) => {
  registerPage = new RegisterPage(page);
  await registerPage.enterPhoneNumber(phone);
});

When('I click on the continue button', async () => {
  await registerPage.clickContinue();
});