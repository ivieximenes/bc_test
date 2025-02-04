
import 'cypress-plugin-api';

Cypress.Commands.add('createToken', () =>{
    cy.fixture('user').then((user) => {
        const userData = user.validUser;
        cy.api({
            method: 'POST',
            url: Cypress.env('apiBaseUrl') + '/login',
            body: {
                email: userData.email,
                password: userData.password
            }
        })   
        .then(response => { 
            localStorage.setItem('token', response.body.authorization)
        })   
    })
})

Cypress.Commands.add('getProducts', () => {
    cy.api({
        method: 'GET',
        url: Cypress.env('apiBaseUrl') +'/produtos'
    })
});
Cypress.Commands.add('getCarts', () => {
    cy.api({
        method: 'GET',
        url: Cypress.env('apiBaseUrl') +'/carrinhos'
    })
});

Cypress.Commands.add('getCartById', (cartId) => {
    cy.api({
        method: 'GET',
        url: Cypress.env('apiBaseUrl') +`/carrinhos/${cartId}`,
        headers: {
            Authorization: `${localStorage.getItem('token')}`
        },
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCart', () => {
    cy.fixture('products').then((product) => {
        const productData = product.validProduct;

        const body = {
            produtos: [
                {
                    idProduto: productData.idProduto,
                    quantidade: productData.quantidade
                }
            ]
        }

        cy.api({
            method: 'POST',
            url: Cypress.env('apiBaseUrl') +'/carrinhos',
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            },
            body:  body,
            failOnStatusCode: false
        })
    })
});


Cypress.Commands.add('deleteCart', (cartId) => {
    cy.api({
        method: 'DELETE',
        url: Cypress.env('apiBaseUrl') +`/carrinhos/cancelar-compra`,
        headers: {
            Authorization: `${localStorage.getItem('token')}`
        },
        failOnStatusCode: false
    })
});
