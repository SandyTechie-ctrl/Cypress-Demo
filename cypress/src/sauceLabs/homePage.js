export function homePageDisplayed() {
    cy.get('span[data-test="title"]').contains('Products').should('be.visible');
}

export function logout() {
    cy.get('button[id="react-burger-menu-btn"]').should('be.visible');
    cy.get('button[id="react-burger-menu-btn"]').click();
    cy.wait(1000) // wait for the menu to be visible for user
    cy.get('a').contains('Logout');
    cy.get('a[id="logout_sidebar_link"]').click();
}

export function addItemsToCart() {
    cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
}

export function navigateToYourCart() {
    cy.get('a[data-test="shopping-cart-link"]').click();
    cy.get('span').contains('Your Cart').should('be.visible');
}

export function checkout(firstName, lastName, postalCode) {
    cy.get('button[name="checkout"]').should('be.visible').click();
    cy.get('span').contains('Checkout: Your Information').should('be.visible');
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('input[name="postalCode"]').type(postalCode);
    cy.get('input[name="continue"]').click();
    cy.get('span').contains('Checkout: Overview').should('be.visible');
    validatePaymentInfo();
    cy.get('button[name="finish"]').click();
}

export function validatePaymentInfo() {
    cy.get('div[data-test="payment-info-label"]').should('be.visible');
    cy.get('div[data-test="shipping-info-label"]').should('be.visible');
    cy.get('div[data-test="total-info-label"]').should('be.visible');
    cy.get('div[data-test="total-label"]').should('be.visible');
}

export function successPage() {
    cy.get('span').contains('Checkout: Complete!').should('be.visible');
    cy.get('h2').contains('Thank you for your order!').should('be.visible');
}

export function backToProducts() {
    cy.get('button[name="back-to-products"]').click();
    homePageDisplayed();
}

//




