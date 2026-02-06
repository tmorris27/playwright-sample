import { test, expect } from '@playwright/test';
import { UQASocialFooterLinks } from '../../../utils/Data/index.ts';
import { UQALegalFooterLinks } from '../../../utils/Data/index.ts';


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
