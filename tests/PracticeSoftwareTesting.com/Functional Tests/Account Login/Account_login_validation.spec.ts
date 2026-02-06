import { test, expect } from '@playwright/test';

// test of account login functionality

test('account login functional test',
     {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-sign-in"]').click();
    } else {
    await page.locator('[data-test="nav-sign-in"]').click();
    }
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_USERNAME}`);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(`${process.env.PST_PASSWORD}`);
    await page.locator('[data-test="login-submit"]').click();
     await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
});