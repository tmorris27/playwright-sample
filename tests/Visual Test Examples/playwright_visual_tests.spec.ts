import { test, expect } from '@playwright/test';

// visual test of login link

test('header sign in link visual test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveScreenshot('login page.png')
})