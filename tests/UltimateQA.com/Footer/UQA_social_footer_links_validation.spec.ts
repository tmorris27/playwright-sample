import { test, expect } from '@playwright/test';
import { UQASocialFooterLinks } from '../../../utils/Data/index.ts';

for (const link of UQASocialFooterLinks) {
    test(`social footer links ${link.LinkName} navigates to correct page`,
    {
    tag: ['@UQA', '@footerLinks', '@socialLinks' ],},
    async ({page}) => {
    await page.goto("/",{waitUntil:"domcontentloaded"});
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await page.locator('#et-main-area div').getByRole('link', { name: link.LinkName, exact: true }).click()]);
      await [newPage][0].waitForLoadState('domcontentloaded');
      expect([newPage][0].url()).toBe(link.URL);
   
    })};