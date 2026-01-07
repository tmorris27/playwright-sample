import { lighthouseTest } from './fixture/lighthouse_fixture';
import { playAudit } from 'playwright-lighthouse';
import lighthouseDesktopConfig from 'lighthouse/core/config/lr-desktop-config.js';
import lighthouseMobileConfig from 'lighthouse/core/config/lr-mobile-config.js';

lighthouseTest.describe('Lighthouse Performance Audits', 
  { 
    tag: ["@lighthouse_PST, @lighthouse_UQA"]
   }, 
   () => {
  lighthouseTest('Desktop Lighthouse Audit',
    { 
      tag:["@lighthouse-report-desktop"]
    },
    async ({ browser, port }) => {
    const page = await browser.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
    
    await playAudit({
      page,
      port,
      config: lighthouseDesktopConfig,
      thresholds: {
        performance: 60,
        accessibility: 60,
        'best-practices': 60,
        seo: 60,
      },
      reports: {
        formats: {
          html: true,
          json: false
        },
        name: 'desktop-lighthouse-report',
        directory: './lighthouse-reports'
      }
    });
    
    await page.close();
  });

  lighthouseTest('Mobile Lighthouse Audit',
    { 
      tag:["@lighthhouse_PST", "@lighthouse_UQA"]
    },
     async ({ browser, port }) => {
    const page = await browser.newPage();
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
    
    await playAudit({
      page,
      port,
      config: lighthouseMobileConfig,
      thresholds: {
        performance: 60,
        accessibility: 60,
        'best-practices': 60,
        seo: 60,
      },
      reports: {
        formats: {
          html: true,
          json: false
        },
        name: 'mobile-lighthouse-report',
        directory: './lighthouse-reports'
      }
    });
    
    await page.close();   
  });

});