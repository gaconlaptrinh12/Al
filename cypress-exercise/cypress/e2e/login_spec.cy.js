describe('Login Test', () => {
  it('Should login successfully with valid credentials', () => {
    cy.loginSauceDemo();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('Should show error message with invalid credentials', () => {
    cy.loginSauceDemo('invalid_user', 'wrong_password');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});
