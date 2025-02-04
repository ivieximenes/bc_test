import selectors from '../../config/e2e/selectors'; 

const baseUrl = Cypress.config('baseUrl');
const loginURL = '/login';

class LoginPage {
    get emailInput() {
      return cy.get(selectors.emailInput);
    }
  
    get passwordInput() {
      return cy.get(selectors.passwordInput);
    }
  
    get loginButton() {
      return cy.get(selectors.loginButton);
    }
  
    get errorMessage() {
      return cy.get(selectors.alertBox).children('span');
    }

    get loginURL() {
        return baseUrl + loginURL;
    }
    fillLogin(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
    }

    visit() {
        cy.visit(`${baseUrl}` + loginURL);
    }
  }

  export default LoginPage;