import { Page } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();

export const baseURL: string = process.env.BASE_URL || "";

if (!baseURL) {
  throw new Error("BASE_URL is not defined in .env file");
}

export class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  
}
