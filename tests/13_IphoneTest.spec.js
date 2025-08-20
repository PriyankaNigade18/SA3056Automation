import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
 
  await page.getByText('E-Mail Address').click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('test24@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
 
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('button', { name: 'Login' }).click();
});