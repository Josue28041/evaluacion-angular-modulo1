describe('Marker map test', () => {
  it('loads map and clicks marker', () => {
    cy.visit('/');
    cy.get('mgl-marker').click();
  });
});

describe('Click Tracker Test', () => {
  it('tracks button click', () => {
    cy.visit('/');
    cy.get('[data-track="test"]').click();
  });
});

describe('Tracking Counter UI', () => {
  it('displays updated count', () => {
    cy.visit('/');
    cy.get('[data-track="test"]').click();
    cy.contains('test: 1');
  });
});