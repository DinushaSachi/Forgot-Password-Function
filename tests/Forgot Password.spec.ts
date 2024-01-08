import { test, expect } from '@playwright/test';

const FORGOT_PASSWORD_LINK_SELECTOR = '//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[2]/form/div[3]/a'; 
const EMAIL_FIELD_SELECTOR = '//input[@id="email"]'; 
const SUBMIT_BUTTON_SELECTOR = '//*[@id="pb-page-content"]/div/div[7]/div/div[2]/form/div[4]/input'; 
const EXPECTED_RESET_SUCCESS_SELECTOR = '//html/body/div[2]/div/div[7]/div/div[2]/div[2]/p"';



test('Test Forgot Password functionality', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  await page.click('span.sign-in-label') 

  
  await page.click(FORGOT_PASSWORD_LINK_SELECTOR);

  
  await page.waitForSelector(EMAIL_FIELD_SELECTOR, { timeout: 5000 });

  
  await page.fill(EMAIL_FIELD_SELECTOR, '999dinusha@gmail.com');

  
  await page.click(SUBMIT_BUTTON_SELECTOR);


  const resetSuccessParagraph = await page.waitForSelector(EXPECTED_RESET_SUCCESS_SELECTOR, { timeout: 60000 });

  expect(resetSuccessParagraph).not.toBeNull();
});

  