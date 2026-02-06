import { test, expect } from '@playwright/test';

test('account login negative test incorrect email and password',
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
    await page.locator('[data-test="email"]').fill("test@test.com");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('test');
    await page.locator('[data-test="login-submit"]').click();
    await expect(page.locator('[data-test="login-error"]')).toHaveText('Invalid email or password');
});
