import { test, expect } from '@playwright/test';

// visual test of the header element

test('header visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('navigation');
    await page.waitForLoadState('domcontentloaded');
    await expect(header).toHaveScreenshot('header.png');
});



