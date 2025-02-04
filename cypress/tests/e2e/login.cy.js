const baseUrl = Cypress.config('baseUrl');

const emailInput = '[data-testid=email]';
const passwordInput = '[data-testid=senha]';
const dashboardURL = '/admin/home';
const loginURL =  '/login';
const alertBox = '[role=alert]';
const loginButton = '[data-testid=entrar]';

const invalidCredentialsMessage = 'Email e/ou senha inválidos';
const invalidEmailMessage = 'Email deve ser um email válido';

describe('Login', () => {
    
    beforeEach(() => {
        cy.visit(`${baseUrl}` + loginURL);
    })  

    it('Deve acessar a página de login com sucesso', () => {
        cy.url().should('eq', `${baseUrl}` + loginURL);
    });

    it('Deve efetuar o login com sucesso', () => { 
        cy.login();
        cy.url().should('eq', `${baseUrl}`+ dashboardURL);
    });

    it('Deve exibir mensagem de erro no caso de Email e/ou Senha inválidos', () => {
        cy.get(emailInput).type('fulano@gmail.com');
        cy.get(passwordInput).type('teste');
        cy.get(loginButton).click();
        cy.contains(alertBox, invalidCredentialsMessage);
    });

    it('Deve exibir mensagem de erro no caso de Email inválido', () => {
        cy.get(emailInput).type('gaaaaa@tttttt');
        cy.get(passwordInput).type('teste');
        cy.get(loginButton).click();
        cy.contains(alertBox, invalidEmailMessage);
    });

})