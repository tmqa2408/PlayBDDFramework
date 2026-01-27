import { Page } from '@playwright/test';
import { HomePage } from 'tests/UI_Test/pages/HomePage';
import { createBdd } from 'playwright-bdd';
import { playAudit } from 'playwright-lighthouse';
import playwright from 'playwright';
import { test } from 'tests/UI_Test/fixture/fixture';

const { Given, When, Then, Before } = createBdd(test);
let homePage: Page;

Then('I verify Lighthouse results for the home page', async ({}) => {
  // Step: Then I verify Lighthouse results for the home page
  // From: tests/A11y/features/lighthouseHome.feature:6:5
  //});

  const browser = await playwright['chromium'].launch({
    args: ['--remote-debugging-port=9222'],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const homePage = new HomePage(page);

  await homePage.navigateToHomePage();

  await playAudit({
    page: page,
    thresholds: {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
    },
    ignoreError: true,
    port: 9222,
    reports: {
      "formats": {"html": true},
      name: "Lighthouse Report",
      directory: "lighthouse-reports-" + Date.now().toString
    }
  });

  await browser.close();
});
