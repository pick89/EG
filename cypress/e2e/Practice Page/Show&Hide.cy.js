/// <reference types="cypress"/>

describe('Show and Hide', () => {
    it('Hide the texbox', () => {
      cy.visit('/task.html');
      cy.get('#show-textbox').click();
      cy.get('#displayed-text').type('Jane :)').should('be.visible')
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible')
    });

    it('Show the texbox', () => {
        cy.visit('/task.html');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').type('Jake ;)').should('be.visible')
        
    });

});