import { test, expect } from '@playwright/test';

// visual test of the footer element

test('footer visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    const footer = page.locator('div').filter({ hasText: 'This is a DEMO application (' })
    await page.waitForLoadState('domcontentloaded');
    await expect(footer).toHaveScreenshot('footer.png');
});