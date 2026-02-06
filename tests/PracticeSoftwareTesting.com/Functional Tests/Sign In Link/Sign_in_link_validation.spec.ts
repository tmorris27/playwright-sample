import { test, expect } from '@playwright/test';

// test of the header sign in link
test('header sign in link functional test', {
    tag: ['@PST', '@functionalTests' ],
},
 async ({ browser, isMobile }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('');
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-sign-in"]').click();
    } else {
    await page.locator('[data-test="nav-sign-in"]').click();
    }
    await page.waitForLoadState("domcontentloaded" );
    await expect(page).toHaveURL('/auth/login')
});
