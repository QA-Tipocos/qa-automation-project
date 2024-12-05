// Import the necessary libraries from Playwright to set up and run tests
import { expect, test } from "@playwright/test";

// Define a new test named "should access the login page"
test("should access the login page", async ({ page }) => {
  // The 'page.goto()' command opens the URL of the website we want to test
  // In this case, we are opening the Sauce Demo login page
  await page.goto("https://www.saucedemo.com/");

  // Check if the page title is correct.
  // 'expect' is used to make the check, and 'toBe' is used to compare with the expected value
  // The expected value is "Swag Labs", which is the login page title of Sauce Demo
  await expect(page).toHaveTitle("Swag Labs");

  // After the check, the test will pass if the title matches the expected one
});

// Define a new test named "should access the login page 2"
test("should access the login page 2", async ({ page }) => {
  // The 'page.goto()' command opens the URL of the website we want to test
  // In this case, we are opening the Sauce Demo login page
  await page.goto("https://www.saucedemo.com/");

  // Check if the page title is correct.
  // 'expect' is used to make the check, and 'toBe' is used to compare with the expected value
  // The expected value is "Swag Labs", which is the login page title of Sauce Demo
  await expect(page).toHaveTitle("Swag Labs");

  // After the check, the test will pass if the title matches the expected one
});

// Test Case 1: Teste de login com credenciais válidas
test("Login com credenciais válidas", async ({ page }) => {
  // Navegar até a página de login
  await page.goto("https://www.saucedemo.com/");

  // Entrar com credenciais válidas
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  // Verificar se a página de produtos foi carregada
  const title = await page.locator(".title").textContent();
  expect(title).toBe("Products");
});

// Test Case 2: Teste de login com credenciais inválidas
test("Login com credenciais inválidas", async ({ page }) => {
  // Navegar até a página de login
  await page.goto("https://www.saucedemo.com/");

  // Entrar com credenciais inválidas
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "invalid_password");
  await page.click('[data-test="login-button"]');

  // Verificar se a mensagem de erro é exibida
  const errorMessage = await page
    .locator(".error-message-container")
    .textContent();
  expect(errorMessage).toContain(
    "Username and password do not match any user in this service"
  );
});

test("Should show error message for locked out user", async ({ page }) => {
  // Acessar a URL
  await page.goto("https://www.saucedemo.com/");

  // Preencher os campos de login
  await page.fill("#user-name", "locked_out_user");
  await page.fill("#password", "secret_sauce");

  // Clicar no botão de login
  await page.click("#login-button");

  // Localizar e validar a mensagem de erro
  const errorMessage = await page
    .locator(".error-message-container")
    .textContent();

  expect(errorMessage).toBe(
    "Epic sadface: Sorry, this user has been locked out."
  );
});
