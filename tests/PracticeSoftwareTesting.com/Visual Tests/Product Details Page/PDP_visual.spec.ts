import { test, expect } from '@playwright/test';

// Visual test of the product details page

test('pdp visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    await page.getByAltText('Combination Pliers').first().click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('img', { name: 'Combination Pliers' })).toBeVisible();
    await expect (page).toHaveScreenshot('pdp.png');
});