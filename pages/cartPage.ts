import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    
    await this.page.click('.shopping_cart_link');
    
  }

  async removeItem(itemName: string) {
    const itemCard = this.page.locator('.cart_item').filter({ hasText: itemName });
    await itemCard.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }
}
