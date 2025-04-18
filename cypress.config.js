const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const XLSX = require('xlsx');
const path = require('path');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reporter: "mochawesome",
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    specPattern: [
      'cypress/**/*.cy.js',
      'cypress/features/**/*.feature'
    ],
    supportFile: 'cypress/support/e2e.js', // or whatever your support file is
    stepDefinitions: 'cypress/step_definitions/*.js', // ✅ <-- ADD THIS
    async setupNodeEvents(on, config) {
      // Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);
  
      // ESBuild plugin
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
  
      // Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
  
      // Excel task
      on('task', {
        readExcelData({ file, sheet }) {
          const filePath = path.resolve(__dirname, file);
          const workbook = XLSX.readFile(filePath);
          const worksheet = workbook.Sheets[sheet];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          return jsonData;
        }
      });
  
      return config;
    }
  }
});
