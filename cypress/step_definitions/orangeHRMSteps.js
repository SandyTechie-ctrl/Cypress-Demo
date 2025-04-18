import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loadUrl, login } from '../orangeHRM/index';
import { homePageDisplayed, navigateToAdmin, collapseMenu, addNewUser, deleteUser } from '../orangeHRM/homePage';

Given('I load the application', () => {
  loadUrl();
});

Given('I login with valid credentials', () => {
  cy.task('readExcelData', {
    file: 'cypress/fixtures/credentials.xlsx',
    sheet: 'Sheet1'
  }).then((data) => {
    const { username, password } = data[0]; // First row
    login(username, password);
  });
});

Given('the home page is displayed', () => {
  homePageDisplayed();
});

When('I navigate to the Admin section', () => {
  navigateToAdmin();
});

When('I collapse the side menu', () => {
  collapseMenu();
});

When('I add a new user', () => {
  addNewUser();
});

Then('I delete the newly added user', () => {
  deleteUser();
});
