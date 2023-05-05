describe('bugs form spec', () => {
  
  it('bugs form empty - test', () => {
    cy.get('#bugs-form').click();
cy.get('#registerBtn').click();
    cy.get('#message').should('contain', 'The password should contain between [6,20] characters!');
  })

    it('bugs form test', () => {
    cy.get('#bugs-form').click();
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Smith');
    cy.get('#phone').type('0720322233');
    cy.get('select').select('Romania');
    cy.get('#emailAddress').type('iamqarv@gmail.com');
    cy.get('#password').type('Qweqweqwe.123');
    cy.get('#registerBtn').click();
    cy.get('#message').should('be.visible');
  })

});
