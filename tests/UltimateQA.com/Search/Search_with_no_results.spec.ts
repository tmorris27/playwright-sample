import { test, expect } from '@playwright/test';

test('unrelated search term returns no results',
    {
    tag: ['@UQA', '@search'],},
    async ({page}) => {
    await page.goto("/");
    await page.getByRole('button', {name:"U"}).click();
    await page.getByRole('searchbox', { name: 'Search for:' }).fill('qqqq');
    await page.getByRole('searchbox', { name: 'Search for:' }).press('Enter');
    await expect(page.getByText('No Results Found')).toBeVisible();
    await expect (page.getByText("The page you requested could not be found. Try refining your search, or use the navigation above to locate the post.")).toBeVisible();
});
