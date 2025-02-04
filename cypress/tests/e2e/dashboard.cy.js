import DashoardPage from '../../support/page-objects/DashboardPage';
import LoginPage from '../../support/page-objects/LoginPage';

const dashboardPage = new DashoardPage();
const loginPage = new LoginPage();

describe('Dashboard', () => { 

    beforeEach(() => {
        cy.login();
    })  

    it('Deve acessar a página de dashboard com sucesso', () => {
        dashboardPage.visit();
    });

    it('Deve efetuar logoff com sucesso', () => {
        dashboardPage.logoff();
        cy.url().should('eq', loginPage.loginURL);
    });

    it('Deve redirecionar para a tela de cadastro de usuário', () => {
        dashboardPage.goToUserAdd();
        cy.url().should('eq', dashboardPage.userAddURL);
    });

    it('Deve redirecionar para a tela de listar usuários', () => {
        dashboardPage.goToUserList();
        cy.url().should('eq', dashboardPage.userListURL);
    });
})