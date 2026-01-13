import { test, expect } from '@playwright/test';

test('search returns relevant results',
    {
    tag: ['@UQA', '@functionalTests' ],},
    async ({page}) => {
    await page.goto("/");
    await page.getByRole('button', {name:"U"}).click();
    await page.getByRole('searchbox', { name: 'Search for:' }).fill('playwright');
    await page.getByRole('searchbox', { name: 'Search for:' }).press('Enter');
    await expect(page.getByText('A Test Data Strategy for Parallel Automation in Playwright')).toBeVisible();
    await expect (page.getByText("Automated Data-Driven API Testing with Playwright TypeScript: A Step-by-Step Guide")).toBeVisible();
    await expect (page.getByText("How to Run Playwright Tests in GitHub Codespaces")).toBeVisible();

    });
