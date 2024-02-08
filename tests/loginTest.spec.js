const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Log In page', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
      });

    test('verify login page header', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.verifyHeader();
    });

    test('verify login page title', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.verifyTitle();
    });

    test('verify login page url', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.verifyUrl();
    });

    test('should log in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
    });

});
