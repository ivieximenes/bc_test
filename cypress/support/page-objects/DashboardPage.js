import selectors from '../../config/e2e/selectors'; 

const baseUrl = Cypress.config('baseUrl');
const dashboardURL = '/admin/home';
const userAddMessage = '/admin/cadastrarusuarios';
const userListMessage = '/admin/listarusuarios';

class DashboardPage {
    get logoutButton() {
        return cy.get(selectors.logoutButton);
    }

    get userAddButton() {
        return cy.get(selectors.userAddButton);
    }

    get userListButton() {
        return cy.get(selectors.userListButton);
    }

    get dashboardURL() {
        return baseUrl + dashboardURL;
    }

    get userAddURL() {
        return baseUrl + userAddMessage;
    }   

    get userListURL() {
        return baseUrl + userListMessage;
    }

    visit() {
        cy.visit(`${baseUrl}` + dashboardURL);
    }

    logoff() {
        this.logoutButton.click();
    }

    goToUserAdd() {
        this.userAddButton.click();
    }

    goToUserList() {
        this.userListButton.click();
    }
}

export default DashboardPage;
