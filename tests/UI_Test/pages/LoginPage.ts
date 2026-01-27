import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
const baseURL = process.env.BASE_URL || "";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToLoginPage() {
    await this.page.goto(baseURL + '/login?returnUrl=%2F');
  }
  get isLoginPageDisplayed() {
    return this.page.locator('.ico-login');
  }

  async enterEmail() {
    await this.page.locator('#Email').fill(email);
  }

  async enterPassword() {
    await this.page.locator('#Password').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('button.button-1.login-button').click();
  }

  get isLogoutVisible() {
    return this.page.locator('.ico-logout');
  }
}
