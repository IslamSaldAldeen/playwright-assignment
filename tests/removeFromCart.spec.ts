import test from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Remove from Cart', () => {

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASEURL!);
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await page.goto('/inventory.html');
  });

  test('add and remove item from cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    
    await page.goto('/inventory.html');
    await inventoryPage.addItem('Sauce Labs Backpack');
    await cartPage.openCart();
    await page.waitForTimeout(1000); 
    await cartPage.removeItem('Sauce Labs Backpack');
    
  });
});
