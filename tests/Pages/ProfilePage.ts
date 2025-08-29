// tests/pages/ProfilePage.ts
import { Page, Locator } from '@playwright/test';
import { mkdirSync } from 'fs';
import path from 'path';

/**
 * ProfilePage POM
 * - likeProfileByIndex(index) -> clicks the heart button for the given profile index
 * - likeMultipleProfiles(count, opts) -> loops and likes multiple visible profiles
 * - captureProfileScreenshot(filePath) -> tries to screenshot the profile card, falls back to page screenshot
 *
 * NOTES:
 * - The selectors are resilient fallbacks based on the SVG path you provided. If your app
 *   has a stable data-testid (recommended) use that instead.
 * - Adjust the XPath string that looks for the heart SVG if the SVG path changes.
 */
export class ProfilePage {
  readonly page: Page;

  // XPath to match button which contains the heart SVG path from your HTML snippet.
  // Adjust the 'M14.6036' portion if the SVG path string differs in other builds.
  private likeButtonXPath = `//button[.//svg//path[contains(@d, "M14.6036")]]`;

  // Locator for profile-card that contains that heart button (used for element screenshots)
  private cardContainingLikeXPath = `//div[.//button[.//svg//path[contains(@d,"M14.6036")]]]`;

  constructor(page: Page) {
    this.page = page;
  }

  private likeButtons(): Locator {
    return this.page.locator(`xpath=${this.likeButtonXPath}`);
  }

  private profileCards(): Locator {
    return this.page.locator(`xpath=${this.cardContainingLikeXPath}`);
  }

  /**
   * Click the like button at a given index (0-based)
   */
  async likeProfileByIndex(index = 0) {
    const likeBtns = this.likeButtons();
    await likeBtns.nth(index).waitFor({ state: 'visible', timeout: 5000 });
    await likeBtns.nth(index).click();
  }

  /**
   * Screenshot the profile card if found; otherwise fallback to a page screenshot.
   * Will create the folder if needed.
   */
  async captureProfileScreenshot(savePath: string) {
    // ensure folder exists
    mkdirSync(path.dirname(savePath), { recursive: true });

    const card = this.profileCards().first();
    const count = await card.count();
    if (count > 0) {
      // screenshot the element (profile card)
      await card.screenshot({ path: savePath });
      return;
    }
    // fallback: full page screenshot (or viewport)
    await this.page.screenshot({ path: savePath, fullPage: false });
  }

  /**
   * Like multiple visible profiles. Options:
   *  - startIndex: start from (default 0)
   *  - captureScreenshots: whether to take a screenshot after each like
   *  - screenshotFolder: where to store screenshots
   *  - delayMs: optional delay between actions to allow UI animations
   */
  async likeMultipleProfiles(count: number, opts?: {
    startIndex?: number;
    captureScreenshots?: boolean;
    screenshotFolder?: string;
    delayMs?: number;
  }) {
    const { startIndex = 0, captureScreenshots = true, screenshotFolder = 'tests/screenshots', delayMs = 700 } = opts || {};

    const likeBtns = this.likeButtons();
    const totalButtons = await likeBtns.count();
    const maxToProcess = Math.min(count, Math.max(0, totalButtons - startIndex));

    for (let i = 0; i < maxToProcess; i++) {
      const idx = startIndex + i;
      // Wait and click
      await likeBtns.nth(idx).waitFor({ state: 'visible', timeout: 5000 });
      await likeBtns.nth(idx).click();

      // Optionally capture screenshot of the card or page
      if (captureScreenshots) {
        const fileName = path.join(screenshotFolder, `profile-liked-${idx + 1}.png`);
        await this.captureProfileScreenshot(fileName);
      }

      if (delayMs) await this.page.waitForTimeout(delayMs);
    }
  }

  /**
   * Optional helper to assert the like icon changed state (if there's a class change).
   * Implement according to how the app toggles the liked state.
   */
  async isProfileLiked(index = 0): Promise<boolean> {
    const btn = this.likeButtons().nth(index);
    // Example: if a class "liked" is toggled — change selector accordingly
    // return await btn.getAttribute('class').then(c => c?.includes('liked') ?? false);
    // Fallback: check aria-pressed or some accessible attribute if present
    const ariaPressed = await btn.getAttribute('aria-pressed');
    if (ariaPressed !== null) return ariaPressed === 'true';
    // final fallback: no reliable way to assert, return false
    return false;
  }
}