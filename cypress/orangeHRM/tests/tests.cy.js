import { loadUrl, login } from "../index";
import { homePageDisplayed, navigateToAdmin, collapseMenu, addNewUser, deleteUser } from "../homePage";

describe('Orange HRM Tests', () => {
  it('TC01 - Add User and Delete the User', () => {
    cy.task('readExcelData').then((credentials) => {
      const { username, password } = credentials[0]; // First row of Excel
      loadUrl();
      login(username, password);
      homePageDisplayed();
      navigateToAdmin();
      collapseMenu();
      addNewUser();
      deleteUser();
    });
  });
});
