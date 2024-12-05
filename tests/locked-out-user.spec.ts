import { test, expect } from '@playwright/test';

test('Should show error message for locked out user', async ({ page }) => {
  // Acessar a URL
  await page.goto('https://www.saucedemo.com/');

  // Preencher os campos de login
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');

  // Clicar no botão de login
  await page.click('#login-button');

  // Localizar e validar a mensagem de erro
  const errorMessage = await page.locator('.error-message-container').innerText();
  expect(errorMessage).toBe('Epic sadface: Sorry, this user has been locked out.');
});
