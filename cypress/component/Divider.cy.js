import { Divider } from '@mui/material';
import React from 'react';

describe('Divider', () => {
  const divider = '.MuiDivider-root ';
  const cyDivider = '[data-cy=divider]';

  it('default prop', () => {
    cy.mount(<Divider data-cy="divider" />);
    cy.get(cyDivider).should('exist').and('be.visible');
  });
  it('absolute prop', () => {
    cy.mount(<Divider absolute={true} data-cy="divider" />);
    cy.get(divider).should('have.class', 'MuiDivider-absolute');
  });
  it('flexItem prop', () => {
    cy.mount(<Divider flexItem={true} data-cy="divider" />);
    cy.get(divider).should('have.class', 'MuiDivider-flexItem');
  });
  it('light prop', () => {
    cy.mount(<Divider light={true} data-cy="divider" />);
    cy.get(divider).should('have.class', 'MuiDivider-light');
  });
  it('orientation prop', () => {
    cy.mount(<Divider orientation={"vertical"} data-cy="divider"  component={'div'}/>);
    cy.get(divider).should('have.class', 'MuiDivider-vertical');
  });  
  it('textAlign prop', () => {
    cy.mount(<Divider textAlign={"right"} data-cy="divider"  component={'div'}/>);
    cy.get(divider).should('have.class', 'MuiDivider-textAlignRight');
  });
  it('variant prop', () => {
    cy.mount(<Divider variant={"inset"} data-cy="divider"  component={'div'}/>);
    cy.get(divider).should('have.class', 'MuiDivider-inset');
  });
});
