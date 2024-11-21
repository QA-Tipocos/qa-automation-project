// Importa as bibliotecas necessárias do Playwright para configurar e rodar os testes
import { test, expect } from "@playwright/test";

// Define um novo teste com o nome "should access the login page"
test("should access the login page", async ({ page }) => {
  // O comando 'page.goto()' acessa a URL do site que vamos testar
  // No caso, estamos acessando a página de login do Sauce Demo
  await page.goto("https://www.saucedemo.com/");

  // Verifica se o título da página está correto. 
  // 'expect' é utilizado para fazer a asserção e 'toBe' para comparar com o valor esperado
  // O valor esperado é "Swag Labs", que é o título da página de login do Sauce Demo
  await expect(page).toHaveTitle("Swag Labs");

  // Após a asserção, o teste será considerado bem-sucedido se o título for o esperado
});
