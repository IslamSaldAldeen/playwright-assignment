import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', process.env.USERNAME!);
  await page.fill('[data-test="password"]', process.env.PASSWORD!);
  await page.click('[data-test="login-button"]');
  await page.waitForURL('**/inventory.html');

  await context.storageState({ path: 'state.json' });
  await browser.close();
}

export default globalSetup;
