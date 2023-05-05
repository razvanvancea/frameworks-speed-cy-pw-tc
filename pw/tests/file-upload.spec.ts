import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://localhost:9080');
});

test('has title', async ({ page }) => {
  await page.locator('#file-upload-item').click();
  await page.setInputFiles("#file_upload", '../picture.jpg');
  await page.locator('button[type="submit"]').click()
  await expect(page.locator('#file_upload_response')).toContainText('You have successfully uploaded');
});
