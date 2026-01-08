import { test, expect } from '@playwright/test';
import {accountCreationData} from '../../utils/Data/index.ts';
import { fill_account_creation_form } from '../../utils/Helpers/fill_account_creation_form.ts';

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
})

// test of the Categories navigation menu
test('categories nav menu functional test', 
    {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page, isMobile}) => {
    await page.goto('/');
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-categories"]').click();
    
    } else {
    await page.locator('[data-test="nav-categories"]').click();
}
    await page.locator('[data-test="nav-hand-tools"]').click();
    await expect(page).toHaveURL('/category/hand-tools')
    const categoryText = page.locator('[data-test="page-title"]');
    await expect(categoryText).toHaveText("Category: Hand Tools");
});

// test of add to cart functionality

test('add to cart functional test',
     {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page }) => {
    await page.goto("/");

    await page.locator('[data-test="product-01KED0QCQJWKPYPVE1R1RSPRR7"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('1');
});

// est of account creation functionality
test('account creation negative test',
     {
    tag: ['@PST', '@functionalTests' ],
},
    async ({browser, isMobile}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("/");
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-sign-in"]').click();
    } else {
    await page.locator('[data-test="nav-sign-in"]').click();
    }
    await fill_account_creation_form(page, accountCreationData);
    await expect(page.locator('.help-block')).toContainText('A customer with this email address already exists.')
    });

// test of account login functionality

test('account login functional test',
     {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile){
        await page.locator('.navbar-toggler-icon').click()
        await page.locator('[data-test="nav-sign-in"]').click();
    } else {
    await page.locator('[data-test="nav-sign-in"]').click();
    }
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_Username}`);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(`${process.env.PST_Password}`);
    await page.locator('[data-test="login-submit"]').click();
    await (page).waitForTimeout(2000)
    await expect(page).toHaveURL('/account');
    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
})

// test of checkout functionality

test('checkout functional test',
    {
    tag: ['@PST', '@functionalTests' ],
},
    async ({ page }) => {
    await page.goto("/");
     await page.locator('[data-test="product-01KED0QCQJWKPYPVE1R1RSPRR7"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="nav-cart"]').click();
    await page.locator('[data-test="proceed-1"]').click();
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_Username}`);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(`${process.env.PST_Password}`);
    await page.locator('[data-test="login-submit"]').click();
    await page.locator('[data-test="proceed-2"]').click();
    await page.locator('[data-test="proceed-3"]').click();
    await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('#order-confirmation')).toContainText('Thanks for your order!');
})

// test of contact form functionality

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
    await page.locator('[data-test="first-name"]').fill(`${process.env.FirstName}`);
    await page.locator('[data-test="last-name"]').dblclick();
    await page.locator('[data-test="last-name"]').fill(`${process.env.LastName}`);
    await page.locator('[data-test="email"]').dblclick();
    await page.locator('[data-test="email"]').fill(`${process.env.PST_Username}`);
    await page.locator('[data-test="subject"]').selectOption('status-of-order');
    await page.locator('[data-test="message"]').click();
    await page.locator('[data-test="message"]').fill('Test message is at least fifty characters or longer than that');
    await page.locator('[data-test="contact-submit"]').click();
    await expect(page.getByRole('alert')).toContainText('Thanks for your message! We will contact you shortly.');
})

