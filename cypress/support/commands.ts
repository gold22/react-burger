Cypress.Commands.add('login', (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button').click();
});
