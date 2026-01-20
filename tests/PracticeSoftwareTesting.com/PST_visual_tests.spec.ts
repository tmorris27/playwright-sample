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

// Visual test of contact form page

test('contact form visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto('/');
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-contact"]').click();
    } else {
    await page.locator('[data-test="nav-contact"]').click();
}
    await expect(page).toHaveScreenshot("contact form.png");
});

// visual test of navigation menu

test('nav menu visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto('/');
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-categories"]').click();
    } else {
    await page.locator('[data-test="nav-categories"]').click();
    }
    const navDropdownMenu = page.getByRole('list', { name: 'nav-categories' })
    await expect(navDropdownMenu).toHaveScreenshot('category dropdown menu.png')
});

// visual test of the header element

test('header visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto('/');
    const header = page.getByRole('navigation');
    await page.waitForLoadState('domcontentloaded');
    await expect(header).toHaveScreenshot('header.png');
});

// visual test of the footer element

test('footer visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    const footer = page.locator('div').filter({ hasText: 'This is a DEMO application (' })
    await page.waitForLoadState('domcontentloaded');
    await expect(footer).toHaveScreenshot('footer.png');
})

// Visual test of the product details page

test('pdp visual test',
    {
    tag: ['@PST', '@visualTests' ],
},
    async ({ page }) => {
    await page.goto("/");
    await page.getByAltText('Combination Pliers').first().click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.getByRole('img', { name: 'Combination Pliers' })).toBeVisible();
    await expect (page).toHaveScreenshot('pdp.png');
})