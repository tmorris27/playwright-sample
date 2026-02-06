import { test, expect } from '@playwright/test';

// test of add to cart functionality

test('add to cart functional test',
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
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('1');
});