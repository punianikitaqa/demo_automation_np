// ProjectsPage.js
const { expect } = require('@playwright/test');
const locators = require('../utils/locators');

exports.ProjectsPage = class ProjectsPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator(locators.ProjectsPage.pageHeader);
        this.projestsTable = page.locator(locators.ProjectsPage.prjectsListTable);
        this.addNewProjectButton = page.locator(locators.ProjectsPage.addNewProjectButton);

        this.projectName = "";
        this.clientName = locators.ProjectsPage.clientName;


    }

    async actionClickOnAddProjectPopupOkButton() {
        await this.page.locator(locators.ProjectsPage.addProjectOkButton).click();
    }

    async actionClickOnAddNewProjectButton() {
        await this.addNewProjectButton.click();
        await expect(this.page.locator(locators.ProjectsPage.addProjectPopup)).toBeVisible();
    }

    async actionAddProjectName() {
        await this.genProjectName();
        await this.page.locator(locators.ProjectsPage.projectNameField).fill(this.projectName);
    }

    async actionAddClientName() {
        await this.page.locator(locators.ProjectsPage.clientNameField).fill(this.clientName);
        await this.page.locator(locators.ProjectsPage.clientNameDropDown).click();
    }

    async actionClickOnCreatedColumn() {
        await this.page.locator(locators.ProjectsPage.createdColumn).click();
    }

    async genProjectName() {
        this.projectName = String("A_test_project_".concat(new Date().getTime()));
    }

    async actionClickOnProject3DotMenu() {
        await this.page.locator(locators.ProjectsPage.threeDotMenu).first(1).click();
    }

    async actionDeleteProject() {
        await this.actionClickOnProject3DotMenu();
        await this.page.getByText('Delete Project').click();
        await this.actionClickOnAddProjectPopupOkButton();
    }

    async actionCreateProject() {
        await this.actionClickOnAddNewProjectButton();
        await this.actionAddProjectName();
        await this.actionAddClientName();
        await this.actionClickOnAddProjectPopupOkButton();
        await this.page.reload();
        await this.verifyProjectIsPresentInTable();

    }

    async actionEditProject() {
        await this.actionClickOnProject3DotMenu();
        await this.page.getByText('Edit Project').click();
        await this.page.getByPlaceholder('Description').click();
        await this.page.getByPlaceholder('Description').fill('test description');
        await this.page.getByPlaceholder('Notes').click();
        await this.page.getByPlaceholder('Notes').fill('test note');
        await this.actionClickOnAddProjectPopupOkButton();

    }

    async actionOpenProject() {
        // Sort project list by created date
        await this.actionClickOnCreatedColumn();
        await this.actionClickOnCreatedColumn();
        await this.page.locator(`//td/a[text()='A_test_project_task']`).click();
    }

    async verifyAddProjectFormValidation() {
        await this.actionClickOnAddNewProjectButton();
        await this.actionClickOnAddProjectPopupOkButton();
        await expect(this.page.locator(locators.ProjectsPage.nameFieldValidationMessage)).toHaveText(/The Name field is required/);
        await expect(this.page.locator(locators.ProjectsPage.nameFieldValidationMessage)).toBeVisible();
        await this.actionAddProjectName();
        await this.actionClickOnAddProjectPopupOkButton();
        await expect(this.page.locator(locators.ProjectsPage.clientFieldValidationMessage)).toBeVisible();
        await expect(this.page.locator(locators.ProjectsPage.clientFieldValidationMessage)).toHaveText(/Projects_Clients/);
    }



    async verifyProjectIsPresentInTable() {
        // Sort project list by created date
        await this.actionClickOnCreatedColumn();
        await this.actionClickOnCreatedColumn();
        //Dynamically generated Xpath
        await expect(this.page.locator(`//td/a[text()='${this.projectName}']`)).toContainText(this.projectName);
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL(/projects/);
    }

    async verifyPageHeader() {
        await expect(this.pageHeader).toHaveText(/Projects/);
    }

    async verifyProjectsPageTableDisplays() {
        await expect(this.projestsTable).toBeVisible();
    }



};
