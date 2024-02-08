// utils/locators.js

module.exports = {
    //Locators using xpath
    LoginPage: {
      usernameInput: "//input[@type='email']",
      passwordInput: "//input[@type='password']",
      loginButton: "//button[text()='Login ']",
      h3Header: "//h3[@class='title has-text-black']"
    },
    HomePage: {
        pageTitle: "//h1[@class='title']",
        projectLink: "//div/a[@href='projects']",
    },
    ProjectsPage: {
        pageHeader: "//h1[@class='title']",
        prjectsListTable: "//table",
        addNewProjectButton: "//h1/button",
        addProjectOkButton: "//button[@class='button is-success']",
        addProjectPopup: "//header/p[@class='modal-card-title']",
        nameFieldValidationMessage: "//ul/li[text()='The Name field is required.']",
        projectNameField: "//div/input[@placeholder='Name']",
        clientNameField: "//div/input[@placeholder='Client']",
        clientFieldValidationMessage: "//ul/li[contains(@key, 'Projects_Clients')]",
        clientNameDropDown: "//div[@class='dropdown-content']/a[text()='A_test_client']",
        createdColumn: "//a[text()='Created']",
        threeDotMenu: "//tr/td/a/span/i",
        deleteProject: "//a/span[contains(text(), 'Delete Project')]",
    

        clientName: "A_test_client"
    },
    TaskPage: {
      pageHeader: "//h1[@class='title']",
      taskTable: "//section[@class='container']/div/div",
      addNewTaskButton: "//button[contains(text(), 'Add New Task')]",
      openTask: "Open Task",

      taskName: "This is a test task for automated test"
    }
  };