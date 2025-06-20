const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    reporter: 'cypress-junit-reporter',
    reporterOptions: {
      mochaFile: 'results/cypress-results-[hash].xml',
      toConsole: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});