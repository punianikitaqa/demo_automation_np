const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProjectsPage } = require('../pages/ProjectsPage');

test.describe('Project Operations', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();

        const homePage = new HomePage(page);
        await homePage.goToProjectPage();
      });

    test('verify projects page url', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.verifyUrl();
    });

    test('verify projects page header', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.verifyPageHeader();
    });

    test('verify projects list table displays', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.verifyProjectsPageTableDisplays();
    });

    test('verify field validations on creating project form', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.verifyAddProjectFormValidation();
    });

    test('verify create and delete Project operation', async ({ page }) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.actionCreateProject();
        await projectsPage.actionDeleteProject();
    });


});
