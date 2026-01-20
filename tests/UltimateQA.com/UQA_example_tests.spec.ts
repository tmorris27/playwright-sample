import { test, expect } from '@playwright/test';
import {UQAStandardFooterLinks} from '../../utils/Data/index.ts';
import { UQASocialFooterLinks } from '../../utils/Data/index.ts';
import { UQALegalFooterLinks } from '../../utils/Data/index.ts';

test('search returns relevant results',
    {
    tag: ['@UQA'],},
    async ({page}) => {
    await page.goto("/");
    await page.getByRole('button', {name:"U"}).click();
    await page.getByRole('searchbox', { name: 'Search for:' }).fill('playwright');
    await page.getByRole('searchbox', { name: 'Search for:' }).press('Enter');
    await expect(page.getByText('A Test Data Strategy for Parallel Automation in Playwright')).toBeVisible();
    await expect (page.getByText("Automated Data-Driven API Testing with Playwright TypeScript: A Step-by-Step Guide")).toBeVisible();
    await expect (page.getByText("How to Run Playwright Tests in GitHub Codespaces")).toBeVisible();

    });

    for (const link of UQAStandardFooterLinks) {
    test(`footer links ${link.LinkName} navigates to correct page`,
    {
    tag: ['@UQA', '@footerLinks' ],},
    async ({page}) => {
    await page.goto("/",{waitUntil:"domcontentloaded"});
    await page.locator('#et-main-area div').getByRole('link', { name: link.LinkName, exact: true }).click();
     await page.waitForURL(link.URL, { waitUntil: "domcontentloaded" });
      expect(page.url()).toBe(link.URL);
    });}

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

    for (const link of UQALegalFooterLinks) {
    test(`legal footer links ${link.LinkName} navigates to correct page`,
      {
      tag: ['@UQA', '@footerLinks', '@legalLinks' ],},
      async ({page}) => {
        await page.goto("/",{waitUntil:"domcontentloaded"});
        const [newLegalPage] = await Promise.all([
            page.context().waitForEvent('page'),
            await page.locator('.et_pb_section.et_pb_section_1_tb_footer').getByRole('link', { name: link.LinkName, exact: true }).click()]);
          await [newLegalPage][0].waitForLoadState('domcontentloaded');
          expect([newLegalPage][0].url()).toBe(link.URL);
      })}
    ;
