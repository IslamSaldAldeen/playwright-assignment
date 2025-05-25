import { Page } from '@playwright/test';

export class InventoryPage {
  private sortDropdown;
  private itemNameLocator;
  private itemPriceLocator;

  constructor(private page: Page) {
    this.sortDropdown = this.page.locator('[data-test="product-sort-container"]');
    this.itemNameLocator = this.page.locator('.inventory_item_name');
    this.itemPriceLocator = this.page.locator('.inventory_item_price');
  }

  async sortBy(option: 'Name (A to Z)' |  'Price (high to low)') {
   
    await this.sortDropdown.selectOption(option);
  }

  async getItemNames(): Promise<string[]> {
    return await this.itemNameLocator.allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const prices = await this.itemPriceLocator.allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }
async addItem(itemName: string) {
  const itemCard = this.page.locator('.inventory_item').filter({ hasText: itemName });
  await itemCard.locator('button.btn_inventory').click();
}


}