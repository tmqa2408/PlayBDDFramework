import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';

const { Given, When, Then } = createBdd(test);
const baseURL = process.env.BASE_URL;

Then('I verify the wishlist is empty', async ({page}) => {
    await expect(page.locator(".wishlist-qty")).toContainText('(0)');
});

When('I navigate to the wishlist page', async ({page}) => {
    await page.goto(baseURL + '/wishlist');
});

Then('I click AddToWishlist button for HTC One M8 Android', async ({page}) => {
    await page.getByRole('button', { name: 'Add to wishlist' }).nth(2).click();
});

Then('I should see the item {string} in the wishlist', async ({page}, arg: string) => {
  await expect(page.locator(".product-name")).toBeVisible();
  await expect(page.locator(".product-name")).toContainText(arg);
});

Then('I delete M8_HTC_5L Picture of HTC One from the wishlist', async ({page}) => {
    await expect(page.getByRole('row', { name: 'M8_HTC_5L Picture of HTC One' }).getByRole('button')).toBeVisible();
    await page.getByRole('row', { name: 'M8_HTC_5L Picture of HTC One' }).getByRole('button').click();
});