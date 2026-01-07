import { test, expect } from '@playwright/test';

// visual test of login page

test('header sign in page visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveScreenshot('login page.png')
})

// Visual test of contact form page

test('contact form visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="nav-contact"]').click();
    await expect(page).toHaveScreenshot("contact form.png");
})

// visual test of navigation menu

test('nav menu visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="nav-categories"]').click();
    const navDropdownMenu = page.getByRole('list', { name: 'nav-categories' })
    await expect(navDropdownMenu).toHaveScreenshot('category dropdown menu.png')
})

// visual test of the header element

test('header visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    const header = page.locator('.navbar navbar-expand-lg navbar-light bg-light');
    await expect(header).toHaveScreenshot('header.png');
});

// visual test of the footer element

test('footer visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    const footer = page.locator(".container-fluid text-center bg-light p-5 mt-4");
    await expect(footer).toHaveScreenshot('footer.png');
})

// Visual test of the product details page

test('pdp visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    await page.locator('[data-test="product-01K0N4FZRFRYWYHW1763QM0KFR"]').click();
    await expect(page).toHaveScreenshot('PDP.png');
})