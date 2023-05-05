import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('http://localhost:9080');
});

test('form test', async ({ page }) => {
  await page.locator('#bugs-form').click();
  await page.locator('#firstName').fill('John');
  await page.locator('#lastName').fill('Smith');
  await page.locator('#phone').fill('0720322233');
  await page.locator('#countries_dropdown_menu').selectOption('Romania')
await page.locator('#emailAddress').fill('iamqarv@gmail.com');
await page.locator('#password').fill('Qweqweqwe.123');
await page.locator('#registerBtn').click();
await expect(page.locator('#message')).toBeVisible();
});

test('empty form test', async ({ page }) => {
  await page.locator('#bugs-form').click();
await page.locator('#registerBtn').click();
await expect(page.locator('#message')).toContainText('The password should contain between [6,20] characters!');
});