const { defineConfig } = require("cypress");
import cypressSplit from 'cypress-split'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressSplit(on, config)
    },
  },
});
