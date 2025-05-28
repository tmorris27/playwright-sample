import { test, expect } from '@playwright/test';

// visual test of login link

test('header sign in link visual test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveScreenshot('login page.png')
})

// visual test of navigation dropdown menu

test('nav menu visual test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    const navDropdownMenu = page.getByRole('list', { name: 'nav-categories' })
    await expect(navDropdownMenu).toHaveScreenshot('category dropdown menu.png')
})

// visual test of the header element

test('header visual test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    const header = page.locator('.navbar navbar-expand-lg navbar-light bg-light');
    await expect(header).toHaveScreenshot('header.png');
});