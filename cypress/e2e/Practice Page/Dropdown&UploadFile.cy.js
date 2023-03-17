/// <reference types="cypress" />

describe('Dropdown', () => {
  it('Select a value', () => {
    cy.visit('/task.html');
    cy.get('#dropdown-class-example').select('Option2');
    cy.get('#dropdown-class-example').should('have.value', 'option2');
  });
});

describe('Upload File', () => {
  beforeEach(() => {
    // Set up any state or configuration needed for the tests to run correctly.
    cy.visit('/task.html');
  });

  it('Upload image/png ', () => {
    const myFile = 'family.png';
    cy.get('.image-upload-wrapper > input').attachFile(myFile);
  }),
    it('Upload image/jpg ', () => {
      const myFile = 'Mercedes-Benz.jpg';
      cy.get('#uploadImg').attachFile(myFile);
    });
});
  
  
