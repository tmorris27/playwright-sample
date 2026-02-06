import { test, expect } from '@playwright/test';

// visual test of login page

test('header sign in page visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto('/');
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-sign-in"]').click();
    } else {
    await page.locator('[data-test="nav-sign-in"]').click();
}
    await expect(page).toHaveScreenshot('login page.png')
});