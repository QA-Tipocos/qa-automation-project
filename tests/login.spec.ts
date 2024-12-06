import { expect, test } from "@playwright/test";

test("should access the login page", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
});


test("should access the login page 2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");
});


test("Login com credenciais válidas", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  const title = await page.locator(".title").textContent();
  expect(title).toBe("Products");
});


test("Login com credenciais inválidas", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "invalid_password");
  await page.click('[data-test="login-button"]');
  
  const errorMessage = await page
    .locator(".error-message-container")
    .textContent();
  expect(errorMessage).toContain(
    "Username and password do not match any user in this service"
  );
});

test("Should show error message for locked out user", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "locked_out_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  const errorMessage = await page
    .locator(".error-message-container")
    .textContent();

  expect(errorMessage).toBe(
    "Epic sadface: Sorry, this user has been locked out."
  );
});
