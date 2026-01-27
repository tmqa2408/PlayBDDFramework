import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';
import AxeBuilder from '@axe-core/playwright';

const { Given, When, Then, Before } = createBdd(test);

Given('I navigate to the home page', async ({homePage}) => {
  await homePage.navigateToHomePage();
});

Then('I should see the logo at the top', async ({homePage, page}) => {
  await page.pause();
  await expect(homePage.isLogoVisible).toBeVisible({ timeout: 10000 });
});

Then('I should see the Computers menu', async ({homePage}) => {
  await expect(homePage.isComputersMenuVisible).toBeVisible();
});

Then('I should see the Electronics menu', async ({homePage}) => {
  await expect(homePage.isElectronicsMenuVisible).toBeVisible();
});

Then('I should see the Apparel menu', async ({homePage}) => {
    await expect(homePage.isApparelMenuVisible).toBeVisible();
});

Then('I should see the Welcome to our store title', async ({homePage}) => {
    await expect(homePage.isWelcomeTitleVisible).toBeVisible();
});

Then('I should see the search field', async ({homePage}) => {
    await expect(homePage.isSearchFieldVisible).toBeVisible();
});

Then('I should see the search button', async ({homePage}) => {
    await expect(homePage.isSearchButtonVisible).toBeVisible();
});

Then('I should see the Featured products section', async ({homePage}) => {
    await expect(homePage.isFeaturedProductsSectionVisible).toBeVisible();
});

Then('I verify accessibility results for the home page', async ({ page }) => {
  
  await test.step("check a11y", async () => {
  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
  });
});
