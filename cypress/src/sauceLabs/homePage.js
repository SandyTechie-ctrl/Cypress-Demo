export function homePageDisplayed() {
    cy.get('span[data-test="title"]').should('be.visible');
}

export function logout() {
    cy.get('button[id="react-burger-menu-btn"]').should('be.visible');
    cy.get('button[id="react-burger-menu-btn"]').click();
    cy.wait(1000) // wait for the menu to be visible for user
    cy.get('a').contains('Logout');
    cy.get('a[id="logout_sidebar_link"]').click();
}


