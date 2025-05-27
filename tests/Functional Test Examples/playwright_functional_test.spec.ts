import { test, expect } from '@playwright/test';

// test of the header sign in link
test('header sign in link functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/")
})