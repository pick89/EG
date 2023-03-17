/// <reference types="cypress"/>

describe('Check the important info', () => {
  it('Visit the iFrame', () => {
    // navigate to the page containing the iframe
    cy.visit('/task.html');
    //Interact with iFrame
    cy.frameLoaded()

    cy.iframe().find('#menu-item-100599').click()
  });

  it('Visit the iFrame', () => {
    cy.visit('/task.html');
    cy.iframe().find('#menu-item-100599').click();
  });

});
 