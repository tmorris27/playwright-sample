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

// test of add to cart functionality

test('add to cart functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="product-01JWC7PDMY1YPD61153G9Q78TY"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('1');
});