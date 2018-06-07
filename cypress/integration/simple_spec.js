describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  });
});

describe('My second Test', function() {
  it('Visits homepage', function() {
    cy.visit('localhost:9000')
  });
});

describe('My third Test', function() {
  it('finds the content "Medical Prescription Blockchain Application "', function() {
    cy.visit('localhost:9000')
  });
});

describe('My fourth Test', function() {
  it("clicking 'Sign In' navigates to a new url", function() {
    cy.visit('localhost:9000')

    cy.contains('Sign In').click()
    cy.url().should('include', '/doctor/sign_in')
  });
});

describe('My fifth Test', function() {
  it("clicking 'Register' navigates to a new url", function() {
    cy.visit('localhost:9000')

    cy.contains('Register').click()
    cy.url().should('include', '/doctor/new_registration')
  });
});

describe('My fourth Test', function() {
  it("clicking 'Sign In' navigates to a new url", function() {
    cy.visit('localhost:9000')

    cy.get('#patient_sign_in').contains('Sign In').click()
    cy.url().should('include', '/patient/sign_in')
  });
});
