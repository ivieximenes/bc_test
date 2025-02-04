const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mjdx44',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://front.serverest.dev',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    supportFile: 'cypress/support/index.js',
    env: {
      apiBaseUrl: 'https://serverest.dev/',
    },
  },
});