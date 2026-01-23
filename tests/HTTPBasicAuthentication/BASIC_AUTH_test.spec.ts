import {test, expect} from '@playwright/test'

test('user can access page with http basic authentication',
    {
        tag: ['@BASIC_AUTH'],
    },
    async ({page}) => {
    await page.goto("/")
    expect (page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible;
});