const baseUrl = Cypress.config('baseUrl');
const dashboardURL = '/admin/home';
const logoutButton = '[data-testid=logout]';
const userAddButton = '[data-testid=cadastrarUsuarios]';
const userListButton = '[data-testid=listarUsuarios]';

const userAddMessage = '/admin/cadastrarusuarios';
const userListMessage = '/admin/listarusuarios';
const loginURL =  '/login';

describe('Dashboard', () => { 

    beforeEach(() => {
        cy.login();
    })  

    it('Deve acessar a página de dashboard com sucesso', () => {
        cy.url().should('eq', baseUrl + dashboardURL);
    });

    it('Deve efetuar logoff com sucesso', () => {
        cy.get(logoutButton).click();
        cy.url().should('eq', baseUrl + loginURL);
    });

    it('Deve validar botão de cadastro de usuário', () => {
        cy.get(userAddButton).should('be.visible');
        cy.get(userAddButton).click();
        cy.url().should('eq', baseUrl + userAddMessage);
    });

    it('Deve validar botão de listar usuários', () => {
        cy.get(userListButton).should('be.visible');
        cy.get(userListButton).click();
        cy.url().should('eq', baseUrl + userListMessage);
    });
})