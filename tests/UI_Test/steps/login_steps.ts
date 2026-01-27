import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';

const { Given, When, Then } = createBdd(test);

Given('I navigate to login page', async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
  //   await loginPage.pause();
});

Then('I verify that login page is displayed', async ({ loginPage }) => {
  await expect(loginPage.isLoginPageDisplayed).toBeVisible();
});

Then('I login with valid email', async ({ loginPage }) => {
  await loginPage.enterEmail();
});

Then('I enter valid password', async ({ loginPage }) => {
  await loginPage.enterPassword();
});

When('I click on login button', async ({ loginPage }) => {
  await loginPage.clickLoginButton();
});

Then('verify that the login is success', async ({ loginPage }) => {
  await expect(loginPage.isLogoutVisible).toBeVisible();
});
