/// <reference types="cypress" />

describe('OpenTab', () => {
  //Use the invoke for removing the attribute target="_blank" in order to open the tab on the same page
  it('Open Tab', () => {
    cy.visit('/task.html');
    cy.get('#opentab').invoke('removeAttr', 'target');
    cy.get('#opentab').click();
    cy.location().then((yieldedObject) => cy.log(yieldedObject.href));
  });

  it.skip('opens the about page', () => {
    cy.visit('/task.html');
    cy.window().then((win) => {
      cy.stub(win, 'open').as('open');
    });
    cy.get('#opentab').click();
    cy.get('@open').should('have.been.calledOnceWithExactly', 'https://www.easygenerator.com/');
  });

  it.skip('opens a new tab and verifies its contents', () => {
    cy.visit('/task.html');
    cy.get('#opentab').click();
    cy.window().then((win) => {
      win.open('https://www.easygenerator.com/', '_blank');
    });
    cy.wait(1000); // wait for the new tab to fully load
    cy.window().then((win) => {
      // switch to the new tab
      const newTab = win.parent.window.length - 1;
      win.parent.window[newTab].focus();
      cy.url().should('include', 'newpage');
      // perform additional tests on the new page
    });
  });

  it.skip('opens a new tab and verifies its contents', () => {
    cy.visit('/task.html');
    cy.get('#opentab').click();
    cy.window().then((win) => {
      win.open('https://www.easygenerator.com/', '_blank');
    });
    cy.waitUntil(() =>
      cy.window().then((win) => {
        return win.parent.window.length > 1;
      }),
    );
    cy.window().then((win) => {
      // switch to the new tab
      const newTab = win.parent.window.length - 1;
      win.parent.window[newTab].focus();
      cy.url().should('include', 'newpage');
      // perform additional tests on the new page
    });
  });

  it.skip('opens a new tab and verifies its contents', () => {
    cy.visit('/task.html');
    cy.get('#opentab').click();
    cy.window().then((win) => {
      win.open('https://www.easygenerator.com/', '_blank');
    });
    cy.waitUntil(() =>
      cy.window().then((win) => {
        return win.parent.window.length > 1;
      }),
    );
    cy.window().then((win) => {
      // switch to the new tab
      const newTab = win.parent.window.length - 1;
      win.parent.window[newTab].focus();
      cy.url().should('include', 'newpage');
      // perform additional tests on the new page
    });
  });

  it.skip('opens the about page', () => {
    cy.visit('/task.html');
    cy.window().then((win) => {
      cy.stub(win, 'open').as('open');
    });
    cy.get('#opentab').click();
    cy.waitUntil(() =>
      cy.window().then((win) => {
        const newTab = win.parent.window.length - 1;
        return win.parent.window[newTab].location.href.includes('newpage');
      }),
    );
    cy.get('@open').should('have.been.calledOnceWithExactly', 'https://www.easygenerator.com/', '_blank');
  });


  it('opens the new page', () => {
    cy.visit('/task.html')
    cy.get('#opentab').click()
    cy.waitUntil(() => cy.url().then(url => url.includes('newpage')), { timeout: 10000 })
    cy.url().should('include', 'newpage')
  })
  
  
});
