import { errorCheck, loadUrl, login } from "../src/sauceLabs/index"
import { homePageDisplayed, logout } from "../src/sauceLabs/homePage"

describe('Sauce Labs Tests', () => {
  it('TC01 - Login and Logout test', () => {
    loadUrl(),
    login('standard_user', 'secret_sauce'),
    homePageDisplayed(),
    logout();
  })

  it('TC02 - Invalid Username and Password test', () => {
    loadUrl(),
    login('error_user', 'secret_sauce1')
    errorCheck();
  })
})