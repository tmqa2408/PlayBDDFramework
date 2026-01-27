import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage() {
    await this.page.goto('https://nop-qa.portnov.com');
  }
  get isLogoVisible() {
    return this.page.locator('.header-logo');
  }

  get isComputersMenuVisible() {
    return this.page.getByRole('link', { name: 'Computers' }).first();
  }

  get isElectronicsMenuVisible() {
    return this.page.getByRole('link', { name: 'Electronics' }).first();
  }

  get isApparelMenuVisible() {
    return this.page.getByRole('link', { name: 'Apparel' }).first();
  }

  get isWelcomeTitleVisible() {
    return this.page.getByRole('heading', { name: 'Welcome to our store' });
  }
  get isSearchFieldVisible() {
    return this.page.getByRole('textbox', { name: 'Search store' });
  }

  get isSearchButtonVisible() {
    return this.page.getByRole('button', { name: 'Search' });
  }

  get isFeaturedProductsSectionVisible() {
    return this.page.locator('.product-grid');
  }
}
