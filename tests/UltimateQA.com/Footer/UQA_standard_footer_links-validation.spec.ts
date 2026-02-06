import { test, expect } from '@playwright/test';
import {UQAStandardFooterLinks} from '../../../utils/Data/index.ts';

for (const link of UQAStandardFooterLinks) {
    test(`${link.LinkName} footer link navigates to correct page`,
    {
    tag: ['@UQA', '@footerLinks' ],},
    async ({page}) => {
    await page.goto("/",{waitUntil:"domcontentloaded"});
    await page.locator('#et-main-area div').getByRole('link', { name: link.LinkName, exact: true }).click();
    await page.waitForURL(link.URL, { waitUntil: "domcontentloaded" });
      expect(page.url()).toBe(link.URL);
    });}