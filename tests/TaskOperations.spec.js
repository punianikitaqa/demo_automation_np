const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProjectsPage } = require('../pages/ProjectsPage');
const { TaskPage } = require('../pages/TaskPage');

test.describe('Project Operations', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login();

        const homePage = new HomePage(page);
        await homePage.goToProjectPage();

        const projectsPage = new ProjectsPage(page);
        await projectsPage.actionOpenProject();
    });

    test('verify task page url', async ({ page }) => {
        const taskPage = new TaskPage(page);
        await taskPage.verifyUrl();
    });

    test('verify task page header', async ({ page }) => {
        const taskPage = new TaskPage(page);
        await taskPage.verifyPageHeader();
    });

    test('verify task page table displays', async ({ page }) => {
        const taskPage = new TaskPage(page);
        await taskPage.verifyTaskPageTableDisplays();
    });


    test('verify create and delete task operation', async ({ page }) => {
        const taskPage = new TaskPage(page);
        await taskPage.actionCreateTask();
        await taskPage.actionDeletetask();
    });

    test('verify create and edit task operation', async ({ page }) => {
        const taskPage = new TaskPage(page);
        await taskPage.actionCreateTask();
        await taskPage.actionEditTask();
        //Clean up steps
        await taskPage.actionDeletetask();
    });

   
});
