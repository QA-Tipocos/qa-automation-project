import { test, expect } from '@playwright/test';

// Test Case 1: Teste de login com credenciais válidas
test('Login com credenciais válidas', async ({ page }) => {
  // Navegar até a página de login
  await page.goto('https://www.saucedemo.com/');

  // Entrar com credenciais válidas
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Verificar se a página de produtos foi carregada
  const title = await page.locator('.title').textContent();
  expect(title).toBe('Products');
});

// Test Case 2: Teste de login com credenciais inválidas
test('Login com credenciais inválidas', async ({ page }) => {
  // Navegar até a página de login
  await page.goto('https://www.saucedemo.com/');

  // Entrar com credenciais inválidas
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'invalid_password');
  await page.click('[data-test="login-button"]');

  // Verificar se a mensagem de erro é exibida
  const errorMessage = await page.locator('.error-message-container').textContent();
  expect(errorMessage).toContain('Username and password do not match any user in this service');
});
