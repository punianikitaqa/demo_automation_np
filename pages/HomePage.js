// HomePage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');
const testUserconfig = require('../utils/testuserConfig');

exports.HomePage = class HomePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.header = page.locator(locators.HomePage.pageTitle);
        
        this.headertxt = "Hello,";

    }

    async verifyHeader() {
        await expect(this.header).toContainText(this.headertxt);
    }

    async goToProjectPage() {
        await this.page.locator(locators.HomePage.projectLink).click();
    }
};
