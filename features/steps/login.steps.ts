import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given ('I navigate to the login page', async ({ page }) =>{
  await page.goto('/login');
});
When('I submit valid credentials', async ({ page }) => {
  await page.fill('#username','practice');
  await page.fill('#password','SuperSecretPassword!');
  await page.click('#submit-login');
});
Then('I should see the alert message', async ({ page}) => {
  await expect(page.locator('#flash')).toBeVisible();
});
When('It should say a success message', async ({ page }) => {
  await expect(page.locator('#flash')).toHaveText('You logged into a secure area!');
});
When('I am done and then click in logout', async ({ page })  => {
  await page.click('.button.secondary.radius.btn.btn-danger');
});
Then('I should see the login page again', async ({ page }) => {
  await expect(page).toHaveURL('/login');
});
Then('It should see a logged out message', async ({ page }) => {
  await expect(page.locator('#flash')).toHaveText('You logged out of the secure area!');
});