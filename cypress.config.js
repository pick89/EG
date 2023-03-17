const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // e2e options here
    chromeWebSecurity: false,
    baseUrl:"http://localhost:8080",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    "defaultCommandTimeout": 6000

  },
})