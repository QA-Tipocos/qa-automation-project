// tests/example.spec.ts

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {  // Adicionando { page } como parâmetro
  // Navega para a página example.com
  await page.goto('https://example.com');
  
  // Verifica se o título da página é "Example Domain"
  await expect(page).toHaveTitle('Example Domain');
});
