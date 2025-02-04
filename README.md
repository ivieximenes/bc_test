### Serverest E2E Test and API test ###


## **Descrição**

Este repositório contém testes E2E e de API, utilizando o Cypress. 


## **Tecnologias Utilizadas**

- **Cypress**
- **JavaScript**
- **Cypress-Plugin-API**
- **mochawesome**


## **Pré-requisitos**

Antes de executar os testes, você precisa ter 

- **Node.js**
- **NPM ou Yarn**


## **Instalação**

1. Clonar o repositório:
    git clone https://github.com/ivieximenes/bc_test.git

2. Naveguar até o diretório do projeto:
    cd bc_test

3. Instalar as dependências:
    npm install ou yarn install


## **Executação dos Testes**

### Testes E2E

1. Executar os testes E2E:
   npx cypress open

2. Executar todos os testes E2E sem interface gráfica:
   npx cypress run

### Testes de API

1. Executar os testes de API:
   npx cypress run --spec cypress/tests/api/*.cy.js

2. Executar todos os testes de API e E2E juntos: 
    npx cypress run


## **Relatórios **
- **cypress/reports/** - Diretório onde os relatórios dos testes são gerados.

