import { test, expect } from '@playwright/test';

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