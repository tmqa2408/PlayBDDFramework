import { test as base } from 'playwright-bdd';
import * as Pages from '../pages/index';
import { Page } from '@playwright/test';

type Myfixture = {
  loginPage: Pages.LoginPage;
  homePage: Pages.HomePage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>
    use(new PageClass(page));

export const test = base.extend<Myfixture>({
  loginPage: async ({ page }, use) => {
    const loginPage = new Pages.LoginPage(page);
    await use(loginPage);
  },

    homePage: async ({ page }, use) => {
    const homePage = new Pages.HomePage(page);
    await use(homePage);
  },
});
