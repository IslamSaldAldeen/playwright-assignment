import {chromium, expect, test} from "@playwright/test"
import { LoginPage } from '../pages/loginPage';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Login Feature', () => {
  test('Login  to inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASEURL!);
    await loginPage.login(process.env.USER_NAME!,process.env.PASSWORD!);
    await expect(page.url()).toContain('inventory.html')

  });
});
