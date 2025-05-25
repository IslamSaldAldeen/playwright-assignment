import test from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Add to Cart', () => {
  
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASEURL!);
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await page.goto('/inventory.html');
  });

  test('add an item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await page.goto('/inventory.html');
    await inventoryPage.addItem('Test.allTheThings() T-Shirt (Red)');
    await page.click('.shopping_cart_link');
    await test.expect(page.locator('.cart_item')).toContainText('Test.allTheThings() T-Shirt (Red)');
  });
});
