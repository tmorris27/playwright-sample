import { test, expect } from '@playwright/test';

// test of checkout functionality

test('checkout functional test',
    {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto("/");
    await page.getByAltText('Combination Pliers').click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('button', {name: 'Add to cart '}).click();
     if (isMobile){
        await page.locator('.navbar-toggler-icon').click()   
    } 
    await page.getByRole('menuitem', {name:'cart'}).click();
    await page.locator('[data-test="proceed-1"]').click();
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_USERNAME}`);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(`${process.env.PST_PASSWORD}`);
    await page.locator('[data-test="login-submit"]').click();
    await page.locator('[data-test="proceed-2"]').click();
    await page.locator('[data-test="proceed-3"]').click();
    await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
    await page.locator('[data-test="finish"]').click();
    await expect (page.locator('[data-test="payment-success-message"]')).toContainText('Payment was successful')
     await page.locator('[data-test="finish"]').click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#order-confirmation')).toContainText('Thanks for your order!');
});