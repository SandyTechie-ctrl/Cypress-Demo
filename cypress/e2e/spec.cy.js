import { errorCheck, loadUrl, login } from "../src/sauceLabs/index"
import { addItemsToCart, backToProducts, checkout, homePageDisplayed, logout, navigateToYourCart, successPage } from "../src/sauceLabs/homePage"

describe('Sauce Labs Tests', () => {
  it('TC01 - Login and Logout test', () => {
    loadUrl(),
    login('standard_user', 'secret_sauce'),
    homePageDisplayed(),
    logout();
  })

  it('TC02 -  Success flow E2E', () => {
    loadUrl(),
    login('standard_user', 'secret_sauce'),
    homePageDisplayed(),
    addItemsToCart(),
    navigateToYourCart(),
    checkout('TestFirstName', 'TestLastName', '500088'),
    successPage(),
    backToProducts(),
    logout();
  })

  it('TC03 - Invalid Username and Password test', () => {
    loadUrl(),
    login('error_user', 'secret_sauce1')
    errorCheck();
  })
})