import test from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { LoginPage } from '../pages/loginPage';

test.describe('Checkout', () => {
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(process.env.BASEURL!);
    await loginPage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await page.goto('/inventory.html');
  });

test('complete checkout process', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
  
    await page.goto('/inventory.html');
    await inventoryPage.addItem('Sauce Labs Backpack');
    await cartPage.openCart();
    await checkoutPage.proceedToCheckout('Islam', 'SadAldeen', '2002');
    await test.expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });


});
