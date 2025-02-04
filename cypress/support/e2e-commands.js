import LoginPage from './page-objects/LoginPage';
const baseUrl = Cypress.config('baseUrl');

const loginPage = new LoginPage();


Cypress.Commands.add('login', () => {
    loginPage.visit();
    cy.fixture('user').then((user) => {
        loginPage.fillLogin(user.validUser.email, user.validUser.password);      
        loginPage.loginButton.click();
    })
})

