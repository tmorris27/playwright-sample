import { test, expect } from '@playwright/test';
import {accountCreationData} from '../../../../utils/Data/index.ts';
import { fill_account_creation_form } from '../../../../utils/Helpers/fill_account_creation_form.ts';

// test of account creation functionality
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
