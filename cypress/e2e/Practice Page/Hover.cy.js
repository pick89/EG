/// <reference types="cypress"/>

describe('Hover', () => {
    it('Hide the texbox', () => {
      cy.visit('/task.html');
      cy.get('.hover-container > .btn').trigger('mouseover');
      cy.get('.hover-content').invoke('show').should('be.visible')
      cy.contains('Top').should('be.visible')
      cy.contains('Reload').should('be.visible')
    });
});