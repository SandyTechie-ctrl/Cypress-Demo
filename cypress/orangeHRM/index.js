import { DEFAULT_TIMEOUT } from "../src/sauceLabs/constants/constants"

export function login(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
}

export function loadUrl() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('div[class="orangehrm-login-branding"]', { setTimeout: DEFAULT_TIMEOUT }).should('be.visible');
}