// @ts-check
import { test, expect } from '@playwright/test';

test('page contains expected title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" the expected value.
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});
