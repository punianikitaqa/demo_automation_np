// ProjectsPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');

exports.TaskPage = class TaskPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator(locators.TaskPage.pageHeader);
        this.taskTable = page.locator(locators.TaskPage.taskTable);
        this.addNewTaskButton = page.locator(locators.TaskPage.addNewTaskButton);

    }

    async actionCreateTask() {
        await this.addNewTaskButton.click();
        await this.page.getByPlaceholder('Title').fill(locators.TaskPage.taskName);
        await this.page.getByPlaceholder('Title').press('Enter');
    }

    async actionDeletetask() {
        await this.page.getByLabel('more options').first().click();
        await this.page.getByText('Delete').click();
        await this.actionClickTaskOkButton();
    }

    async actionEditTask() {
        await this.actionOpenTask();
        await this.page.getByPlaceholder('Description').click();
        await this.page.getByPlaceholder('Description').fill('Task edit operation');
        await this.page.getByPlaceholder('Notes').click();
        await this.page.getByPlaceholder('Notes').fill('task note');
        await this.actionClickTaskOkButton();
    }

    async actionClickTaskOkButton() {
        await this.page.getByRole('button', { name: ' OK' }).click();
    }

    async actionOpenTask() {
        await this.page.getByLabel('more options').first().click();
        await this.page.getByText('Open Task').click();
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL(new RegExp('.+\/projects\/.+$'));
    }

    async verifyPageHeader() {
        await expect(this.pageHeader).toBeVisible();
    }

    async verifyTaskPageTableDisplays() {
        await expect(this.taskTable).toBeVisible();
    }

    async verifyFieldValidation() {
        await this.page.getByPlaceholder('Title').click();
        await this.page.getByPlaceholder('Title').fill('');
        await this.actionClickTaskOkButton();
        await expect(this.page.getByText('The Title field is required.')).toBeVisible();
        await this.page.getByRole('banner').getByLabel('close').click();
    }





};
