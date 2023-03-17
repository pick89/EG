// Can select Option1,Optin2,Option3
export function visit(Option1,option1) {
    cy.get('#dropdown-class-example').select(Option1);
    cy.get('#dropdown-class-example').should('have.value', option1);
}