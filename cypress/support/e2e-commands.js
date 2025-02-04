const emailInput = '[data-testid=email]';
const passwordInput = '[data-testid=senha]';
const loginButton = '[data-testid=entrar]';

Cypress.Commands.add('login', () => {
    cy.fixture('user').then((user) => {
        cy.get(emailInput).type(user.email);
        cy.get(passwordInput).type(user.password);        
        cy.get(loginButton).click();
    })
})

