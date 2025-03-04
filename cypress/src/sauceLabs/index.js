import { TIMEOUT } from "../sauceLabs/constants/constants"

export function login(username, password) {
    cy.get('input[id="user-name"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('input[data-test="login-button"]').click();
}

export function loadUrl() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('div[class="login_logo"]', {setTimeout: TIMEOUT}).should('be.visible');
}

export function errorCheck() {
    cy.get('h3').contains('Username and password do not match any user').should('be.visible');
}