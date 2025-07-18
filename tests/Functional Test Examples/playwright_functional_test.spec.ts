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
    await page.goto(`${process.env.URL}`);
    await page.locator('[data-test="product-01JWC7PDMY1YPD61153G9Q78TY"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('1');
});

// test of account login functionality

test('account login functional test', async ({ page }) => {
    await page.goto(`${process.env.URL}`);
    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(`${process.env.Username}`);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(`${process.env.Password}`);
    await page.locator('[data-test="login-submit"]').click();
    await expect(page).toHaveURL(`${process.env.URL}account`);
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
})

// test of checkout functionality

test('checkout functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="product-01JWEK7ES4B0A8SHCBC1C2D2ZH"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await page.locator('[data-test="proceed-1"]').click();
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill('tristanjmorris27@gmail.com');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('TEst1234#!');
    await page.locator('[data-test="login-submit"]').click();
    await page.locator('[data-test="proceed-2"]').click();
    await page.locator('[data-test="proceed-3"]').click();
    await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('#order-confirmation')).toContainText('Thanks for your order!');
})

// test of contact form functionality

test('contact form functional test', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-contact"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/contact");
    await page.locator('[data-test="first-name"]').click();
    await page.locator('[data-test="first-name"]').fill('QA');
    await page.locator('[data-test="last-name"]').dblclick();
    await page.locator('[data-test="last-name"]').fill('Analyst');
    await page.locator('[data-test="email"]').dblclick();
    await page.locator('[data-test="email"]').fill('tristanjmorris27@gmail.com');
    await page.locator('[data-test="subject"]').selectOption('status-of-order');
    await page.locator('[data-test="message"]').click();
    await page.locator('[data-test="message"]').fill('Test message is at least fifty characters or longer than that');
    await page.locator('[data-test="contact-submit"]').click();
    await expect(page.getByRole('alert')).toContainText('Thanks for your message! We will contact you shortly.');
})