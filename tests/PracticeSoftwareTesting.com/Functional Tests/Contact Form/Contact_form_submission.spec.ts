import { test, expect } from '@playwright/test';

test('contact form functional test',
    {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page, isMobile}) => {
    await page.goto("/");
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-contact"]').click();
    } else {
    await page.locator('[data-test="nav-contact"]').click();
    }
    await expect(page).toHaveURL('/contact');
    await page.locator('[data-test="first-name"]').click();
    await page.locator('[data-test="first-name"]').fill(`${process.env.FIRSTNAME}`);
    await page.locator('[data-test="last-name"]').dblclick();
    await page.locator('[data-test="last-name"]').fill(`${process.env.LASTNAME}`);
    await page.locator('[data-test="email"]').dblclick();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_USERNAME}`);
    await page.locator('[data-test="subject"]').selectOption('status-of-order');
    await page.locator('[data-test="message"]').click();
    await page.locator('[data-test="message"]').fill('Test message is at least fifty characters or longer than that');
    await page.locator('[data-test="contact-submit"]').click();
    await expect(page.getByRole('alert')).toContainText('Thanks for your message! We will contact you shortly.');
});
