import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async proceedToCheckout(first: string, last: string, zip: string) {
    await this.page.click('[data-test="checkout"]');
    await this.page.waitForTimeout(5000); 
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
    await this.page.click('[data-test="finish"]');
  }
}
