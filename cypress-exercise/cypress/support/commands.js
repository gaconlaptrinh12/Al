Cypress.Commands.add('loginSauceDemo', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/');
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password, { log: false });
  cy.get('#login-button').click();
});
