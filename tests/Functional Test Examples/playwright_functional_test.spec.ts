import { test, expect } from '@playwright/test';

// test of the header sign in link
test('header sign in link functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/auth/login")
})

// test of the Categories navigation menu
test('categories nav menu functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-hand-tools"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/category/hand-tools')
    const categoryText = page.locator('[data-test="page-title"]');
    await expect(categoryText).toHaveText("Category: Hand Tools");
});