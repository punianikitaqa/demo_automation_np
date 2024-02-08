// LoginPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testUserconfig = require('../utils/testuserConfig');

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
   
    constructor(page) {
        this.page = page;
        this.usernameInputField = page.locator(locators.LoginPage.usernameInput);
        this.passwordInputField = page.locator(locators.LoginPage.passwordInput);
        this.loginButton = page.locator(locators.LoginPage.loginButton);
        this.header = page.locator(locators.LoginPage.h3Header);

        this.headertxt = "Login";
        this.pageUrl = "app-evaluation-9d7f2k.azurewebsites.net";
        this.pageTitle ="Project Management";

        this.userId = testUserconfig.userId;
        this.password = testUserconfig.password;

    }

    async goto() {
        await this.page.goto('/');
    }

    async login() {
        await this.usernameInputField.fill(this.userId);
        await this.passwordInputField.fill(this.password);
        await this.loginButton.click();

        await expect(this.page.locator(locators.HomePage.pageTitle)).toContainText("Hello");
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.pomLink.click();
    }

    async verifyHeader() {
        await expect(this.header).toContainText(this.headertxt);
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async verifyUrl() {
        await expect(this.page.url()).toContain(this.pageUrl);
    }
};
