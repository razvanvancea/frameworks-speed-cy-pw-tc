import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto("http://localhost:9080");
});

test("e2e test", async ({ page }) => {
  await page.locator("#auth-shop").click();

  await page.locator("#email").fill("admin@admin.com");
  await page.locator("#password").fill("admin123");

  await page.locator("#submitLoginBtn").click();
  await page.locator(".shop-items > div.shop-item:first-child button").click();
  await page.locator("button.btn-purchase").click();

  await page.locator("#phone").fill("0720322233");
  await page.locator('input[name="street"]').fill("Ale. Florilor");

  await page.locator('input[name="city"]').fill("Bucharest");
  await page.locator("#countries_dropdown_menu").selectOption("Romania");
  await page.locator("#submitOrderBtn").click();

  await expect(page.locator("#message")).toContainText("Congrats!");
});
