describe('Checkout Test', () => {
  beforeEach(() => {
    cy.loginSauceDemo();
    cy.url().should('include', '/inventory.html');
  });

  it('Should complete checkout information step successfully', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('contain', 'Checkout: Overview');
  });
});
