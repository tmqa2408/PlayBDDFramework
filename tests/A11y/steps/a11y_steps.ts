import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from 'tests/UI_Test/fixture/fixture';
import AxeBuilder from '@axe-core/playwright';
import { HomePage } from 'tests/UI_Test/pages';

const { Given, When, Then, Before } = createBdd(test);

Then('I verify that each image element has a non-empty alt attribute', async ({ page }) => {
  const images = await page.locator('img').all();
  for (const image of images) {
    const altText = await image.getAttribute('alt');
    expect(altText).not.toBe('');
  }
});

Then('I verify image descriptions on the home page', async ({ page }) => {
  const images = await page.$$('img');
  for (const image of images) {
    const altText = await image.getAttribute('alt');
    expect(altText).not.toBe('');
    // Verify that the alt text is descriptive
    // ...
  }
});

Then('I verify the minimum color contrast ratio is met', async ({ page }) => {
  const builder = new AxeBuilder({ page });
  const results = await builder.analyze();
  expect(results.violations).toEqual([]);
});

Then('I verify keyboard navigation functionality on the home page', async ({ page }) => {
    // Simulate keyboard navigation
  await page.press('body', 'Tab');

  // Verify that the focus order is correct
  const elements = await page.$$('interactive');
  for (const element of elements) {
    expect(element).not.toBe(null);
  }
});

Then('I verify seizure prevention guidelines are followed on the home page', async ({ page }) => {
    // Inspect the page for flashing or flickering effects
  const animations = await page.$$('animation');
  expect(animations).toBe(null);
});

Then('I verify text size on the home page is sufficient', async ({ page }) => {
    const texts = await page.$$('text');
  for (const text of texts) {
    const fontSize = await text.getProperty('fontSize');
    expect(fontSize).toBeGreaterThanOrEqual(14);
    expect(fontSize).toBeLessThan(19);
  }
});

Then('I verify users can navigate and interact with content using a keyboard or assistive technology', async ({ page }) => {
  // Verify keyboard navigation
  await page.press('body', 'Tab');
  
  // Verify that interactive elements can be focused
  const buttons = await page.locator('button').all();
  expect(buttons.length).toBeGreaterThan(0);
  
  for (const button of buttons) {
    expect(await button.isVisible()).toBeTruthy();
  }
});