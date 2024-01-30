describe('checks adding order', () => {
  it('order iphone', () => {
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:4200/');
    cy.get('[data-test-order]').should('exist').click();

    cy.get('[data-test-input="0"]').type('R');
    cy.get('[data-test-error="0"]').should(
      'have.text',
      'Name is too short (minimum is 4 characters)'
    );
    cy.get('[data-test-input="0"]').type('obert');
    cy.get('[data-test-error="0"]').should('not.exist');
    cy.get('[data-test-input="1"]').type('Harężlak');
    cy.get('[data-test-input="2"]').type('43-300');
    cy.get('[data-test-input="3"]').type('Bielsko');
    cy.get('[data-test-input="4"]').type('Poland');
    cy.get('[data-test-input="5"]').type('robertharezlak@gmail.com');
    cy.get('[data-test-input="6"]').type(123456789);
    cy.get('[data-test-input="7"]').type('Karbowa');
    cy.get('[data-test-input="8"]').type(38);
    cy.get('[data-test-input="9"]').type('2024-01-01');
    cy.contains('Save').click();

    cy.url().should('eq', 'http://localhost:4200/order/summary');
    cy.get('[data-test-user-order-summary]').contains(
      'Thank You, Robert Harężlak!'
    );
  });

  it('order iphone and check if order exists', () => {
    cy.visit('/admin');
    cy.url().should('eq', 'http://localhost:4200/login');
    cy.visit('/');
    cy.url().should('eq', 'http://localhost:4200/');
    cy.get('[data-test-order]').should('exist').click();

    cy.get('[data-test-input="0"]').type('R');
    cy.get('[data-test-error="0"]').should(
      'have.text',
      'Name is too short (minimum is 4 characters)'
    );
    cy.get('[data-test-input="0"]').type('obert');
    cy.get('[data-test-error="0"]').should('not.exist');
    cy.get('[data-test-input="1"]').type('Harężlak');
    cy.get('[data-test-input="2"]').type('43-300');
    cy.get('[data-test-input="3"]').type('Bielsko');
    cy.get('[data-test-input="4"]').type('Poland');
    cy.get('[data-test-input="5"]').type('robertharezlak@gmail.com');
    cy.get('[data-test-input="6"]').type(123456789);
    cy.get('[data-test-input="7"]').type('Karbowa');
    cy.get('[data-test-input="8"]').type(38);
    cy.get('[data-test-input="9"]').type('2024-01-01');
    cy.contains('Save').click();

    cy.url().should('eq', 'http://localhost:4200/order/summary');
    cy.get('[data-test-user-order-summary]').contains(
      'Thank You, Robert Harężlak!'
    );

    cy.authenticate();
    cy.visit('/admin');
    cy.get('tr').contains('Harężlak');
  });
});
