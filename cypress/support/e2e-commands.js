const baseUrl = Cypress.config('baseUrl');

const emailInput = '[data-testid=email]';
const passwordInput = '[data-testid=senha]';
const loginButton = '[data-testid=entrar]';

const loginURL =  '/login';

Cypress.Commands.add('login', () => {
    cy.visit(`${baseUrl}` + loginURL);
    cy.fixture('user').then((user) => {
        cy.get(emailInput).type(user.validUser.email);
        cy.get(passwordInput).type(user.validUser.password);        
        cy.get(loginButton).click();
    })
})

