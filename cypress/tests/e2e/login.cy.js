import messages from '../../config/e2e/messages'; 
import LoginPage from '../../support/page-objects/LoginPage';
import DashboardPage from '../../support/page-objects/DashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login', () => {
    
    beforeEach(() => {
        loginPage.visit();
    })  

    it('Deve acessar a página de login com sucesso', () => {
        cy.url().should('eq', loginPage.loginURL);
    });

    it('Deve efetuar o login com sucesso', () => { 
        cy.login();
        cy.url().should('eq', dashboardPage.dashboardURL);
    });

    it('Deve exibir mensagem de erro no caso de Email e/ou Senha inválidos', () => {
        cy.fixture('user').then((user) => {
            loginPage.fillLogin(user.unregisteredUser.email, user.unregisteredUser.password);
        })
       loginPage.loginButton.click();
        loginPage.errorMessage.should('have.text', messages.invalidCredentials);
    });

    it('Deve exibir mensagem de erro no caso de Email inválido', () => {
        cy.fixture('user').then((user) => {
            loginPage.fillLogin(user.invalidEmail.email, user.invalidEmail.password);
        })
        loginPage.loginButton.click();
        loginPage.errorMessage.should('have.text', messages.invalidEmail);
    });

})