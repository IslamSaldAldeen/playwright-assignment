import test, { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASEURL!);
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await page.goto('/inventory.html');
  });

  test('should sort items by Name (A to Z)', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortBy('Name (A to Z)');
    const names = await inventoryPage.getItemNames();
    const sortedNames = [...names].sort();

    expect(names).toEqual(sortedNames);
  });

  test('should sort items by Price (High to Low)', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortBy('Price (high to low)');
    const prices = await inventoryPage.getItemPrices();
    const sortedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
  });
  
});
