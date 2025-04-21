import { DEFAULT_TIMEOUT } from "../src/sauceLabs/constants/constants";

const generateString = generateRandomString();

export function homePageDisplayed() {
    cy.get('h6').contains('Dashboard').should('be.visible');
}

export function navigateToAdmin() {
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').should('be.visible').click();
    cy.get('h6').contains('User Management').should('be.visible');
}

export function collapseMenu() {
    cy.get('i[class="oxd-icon bi-chevron-left"]').closest('button').click();
}

export function expandMenu() {
    cy.get('i[class="oxd-icon bi-chevron-right]', {setTimeout: DEFAULT_TIMEOUT}).closest('button').click();
}

export function generateRandomString() {
    const randomString = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `Perficient${randomString}`;
}

export function addNewUser() {
    cy.get('button.oxd-button--secondary').contains(' Add ').click();
    cy.get('h6').contains('Add User').should('be.visible')
    cy.contains('label', 'User Role').parent('div').siblings('div').find('div').contains('-- Select --').click();
    cy.get('div[role="option"]').contains('Admin').click();
    cy.get('input[placeholder="Type for hints..."]').type('Emily Jones')
    cy.wait(2000);
    cy.get('div[role="option"]').contains('Emily Jones').click();
    cy.contains('label', 'Status').parent('div').siblings('div').find('div').contains('-- Select --').click();
    cy.get('div[role="option"]').contains('Enabled').click();
    cy.contains('label', 'Username').parent('div').siblings('div').find('input').type(generateString);
    cy.contains('label', 'Password').parent('div').siblings('div').find('input').type('TestPassword1');
    cy.contains('label', 'Confirm Password').parent('div').siblings('div').find('input').type('TestPassword1');
    cy.get('button').contains(' Save ').click();
    cy.wait(7000);
}

export function deleteUser() {
    cy.contains('div', `${generateString}`).parent().nextAll('div').find('button').first().click();
    cy.get('p').contains('Are you Sure?').should('be.visible');
    cy.get('button').contains(' Yes, Delete ').click();
    cy.wait(5000);
}