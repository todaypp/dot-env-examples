describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    const hello = Cypress.env('HELLO')

    expect(hello).to.equal('World')
  })
})
