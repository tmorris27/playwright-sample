import { test, expect } from '@playwright/test';

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