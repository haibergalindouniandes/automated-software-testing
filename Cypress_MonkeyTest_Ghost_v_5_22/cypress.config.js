const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.cy.{js,jsx,ts,tsx}',
  },
});

// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: 'cypress/integration/*.cy.{js,jsx,ts,tsx}',
//   },
// };

