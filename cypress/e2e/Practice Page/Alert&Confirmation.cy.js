/// <reference types="cypress"/>

import { expect } from 'chai';

describe('Enter the name', function () {

  beforeEach(() => {
    cy.visit('/task.html')
  })

  it('Enter your Name', () => {
    
    // Click a button that triggers an alert
    cy.get('#name').type('Simpsom').should('have.value', 'Simpsom');
    // Intercept the alert and assert on its text
    cy.get('#alertbtn').click;
    // Get the text of the alert message and check that it contains the expected text
    cy.on('window:alert', (AlertText) => {
      expect(AlertText).to.contains('Hello, share this practice page and share your knowledge');
    });
  });

  it('Enter your Name Using fixture', () => {
    cy.fixture('name.json').then((name) => {
    // Click a button that triggers an alert
    cy.get('#name').type(name.name).should('have.value', 'John');
    // Intercept the alert and assert on its text
    })
    cy.get('#alertbtn').click;
    // Get the text of the alert message and check that it contains the expected text
    cy.on('window:alert', (AlertText) => {
      expect(AlertText).to.contains('Hello, share this practice page and share your knowledge');
    });
  });
});

describe('My Cypress Test', () => {
  it('should display an alert message', () => {
    const stub = cy.stub(window, 'alert');
    cy.visit('/task.html');
    cy.get('#name').type('Bart').should('have.value', 'Bart');
    cy.get('#confirmbtn').click();
    console.log();
    cy.get('#confirmbtn').contains('Bart')
    
    cy.get('@alertStub').should('have.been.calledWith', 'Hello, world!')

    stub.restore();
  });
});
