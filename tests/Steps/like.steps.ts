// tests/steps/like.steps.ts
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/Fixtures'; // your extended playwright-bdd test
import { ProfilePage } from '../Pages/ProfilePage';

const { Given, When, Then } = createBdd(test);

Given('I am on the Received/Exclusive page', async ({ page }) => {
  // assume navigation/login already happened in previous steps
  // but initialize the POM here if needed
});

When('I like {int} visible profiles and save screenshots', async ({ page }, count: number) => {
  const profilePage = new ProfilePage(page);
  await profilePage.likeMultipleProfiles(count, {
    captureScreenshots: true,
    screenshotFolder: 'tests/screenshots/liked',
    delayMs: 800,
  });
});

Then('I should have screenshots saved for {int} profiles', async (_, expectedCount: number) => {
  // Simple step placeholder — verifying file existence can be added with fs if needed.
});