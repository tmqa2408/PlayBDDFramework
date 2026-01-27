import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';

const { Given, When, Then } = createBdd(test);
const baseURL = process.env.BASE_URL;

Then('I verify the shopping cart is empty', async ({ page }) => {
  await expect(page.locator('#topcartlink')).toContainText('(0)');
});

When('I navigate to the cart page', async ({ page }) => {
  await page.goto(baseURL + '/cart');
});

Then('I should see the message {string}', async ({ page }, arg: string) => {
  await expect(page.getByText('Your Shopping Cart is empty!')).toContainText(
    arg
  );
});

Then('I click AddToCart button for HTC One M8 Android', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();
});

Then('the cart item count should be {string}', async ({ page }) => {
  await expect(page.locator('#topcartlink')).toContainText(
    'Shopping cart (1) '
  );
});

Then(
  'I delete M8_HTC_5L Picture of HTC One from the cart',
  async ({ page }) => {
    await page
      .getByRole('row', { name: 'M8_HTC_5L Picture of HTC One' })
      .getByRole('button')
      .click();
  }
);

Then('verify that the login is unsuccessful', async ({ page }) => {
  await expect(page.locator('.message-error')).toContainText(
    'Login was unsuccessful. Please correct the errors and try again.'
  );
});
