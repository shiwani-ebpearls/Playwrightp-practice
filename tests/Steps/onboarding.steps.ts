import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/Fixtures';
import { OnboardingPage } from '../Pages/OnboardingPage';

const { Given, When, Then } = createBdd(test);

let onboardingPage: OnboardingPage;
