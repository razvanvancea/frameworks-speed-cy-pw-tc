describe('e2e spec', () => {
  it('e2e test', () => {
    cy.get('#auth-shop').click();
    cy.get('#email').type('admin@admin.com');
    cy.get('#password').type('admin123');
cy.get('#submitLoginBtn').click();
cy.get('.shop-items > div.shop-item:first-child button').click();
cy.get('button.btn-purchase').click();
cy.get('#phone').type('0720322233');
cy.get('input[name="street"]').type('Ale. Florilor');
cy.get('input[name="city"]').type('Bucharest');
cy.get('select').select('Romania');
cy.get('#submitOrderBtn').click();
    cy.get('#message').should('contain', 'Congrats!');
  })
});