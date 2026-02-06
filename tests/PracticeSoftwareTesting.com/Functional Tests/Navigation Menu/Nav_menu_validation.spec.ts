import { test, expect } from '@playwright/test';
import {accountCreationData} from '../../../../utils/Data/index.ts';
import { fill_account_creation_form } from '../../../../utils/Helpers/fill_account_creation_form.ts';

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
    await expect(page).toHaveURL('/category/hand-tools');
    const categoryText = page.locator('[data-test="page-title"]');
    await expect(categoryText).toHaveText("Category: Hand Tools");
});











