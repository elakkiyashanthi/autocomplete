import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

describe('Autocomplete', () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  it('default values', () => {
    cy.mount(<Checkbox {...label} data-cy="checkbox" />);
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible');
  });
  it('inputProps prop', () => {
    cy.mount(<Checkbox {...label} checked data-cy="checkbox" />);
    cy.get('.MuiCheckbox-root input').should(
      'have.attr',
      'aria-label',
      'Checkbox demo'
    );
  });
  it('checked prop', () => {
    cy.mount(<Checkbox {...label} checked data-cy="checkbox" />);
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible');
    cy.get('.MuiCheckbox-root').should('have.class', 'Mui-checked');
  });
  it('defaultChecked prop', () => {
    cy.mount(
      <Checkbox {...label} defaultChecked data-cy="checkbox" />
    );
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible');
    cy.get('.MuiCheckbox-root').should('have.class', 'Mui-checked');
  });
  it('disabled prop', () => {
    cy.mount(<Checkbox {...label} disabled data-cy="checkbox" />);
    cy.get('.MuiCheckbox-root').should('have.class', 'Mui-disabled');
  });
  it('size-small prop', () => {
    cy.mount(
      <Checkbox {...label} size={'small'} data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root svg').should(
      'have.class',
      'MuiSvgIcon-fontSizeSmall'
    );
  });
  it('required prop', () => {
    cy.mount(
      <Checkbox {...label} required={true} data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root input').should('have.attr', 'required');
  });
  it('color prop', () => {
    cy.mount(
      <Checkbox {...label} color="error" data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root').should(
      'have.class',
      'MuiCheckbox-colorError'
    );
  });
  it('disableRipple prop', () => {
    cy.mount(
      <Checkbox {...label} disableRipple={false} data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root span').should('be.empty');
  });
  it('indeterminate prop', () => {
    cy.mount(
      <Checkbox {...label} indeterminate={true} data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root').should(
      'have.class',
      'MuiCheckbox-indeterminate'
    );
  });
  it('sx prop', () => {
    cy.mount(
      <Checkbox
        {...label}
        sx={{ color: 'pink' }}
        data-cy="checkbox"
      />
    );
    cy.get('.MuiCheckbox-root').should('have.css', { color: 'pink' });
  });
  it('icon and checkedIcon prop', () => {
    cy.mount(
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    );
    cy.get('.MuiCheckbox-root svg').should(
      'have.attr',
      'data-testid',
      'BookmarkBorderIcon'
    );
    cy.get('.MuiCheckbox-root').click();
    cy.get('.MuiCheckbox-root svg').should(
      'have.attr',
      'data-testid',
      'BookmarkIcon'
    );
  });
  it('id prop', () => {
    cy.mount(
      <Checkbox {...label} id="cypress-checkbox" data-cy="checkbox" />
    );
    cy.get('.MuiCheckbox-root input').should(
      'have.id',
      'cypress-checkbox'
    );
  });
  it('indeterminateIcon prop', () => {
    cy.mount(
      <Checkbox
        {...label}
        indeterminate={true}
        indeterminateIcon={<BookmarkBorderIcon />}
        data-cy="checkbox"
      />
    );
    cy.get('.MuiCheckbox-root').should(
      'have.class',
      'MuiCheckbox-indeterminate'
    );
    cy.get('.MuiCheckbox-root svg').should(
      'have.attr',
      'data-testid',
      'BookmarkBorderIcon'
    );
  });
  it('onChange  prop', () => {
    cy.mount(
      <Checkbox
        {...label}
        onChange={(event) => (event.target.value = 5)}
        data-cy="checkbox"
      />
    );
    cy.get('.MuiCheckbox-root').click();
    cy.get('.MuiCheckbox-root input').should(
      'have.attr',
      'value',
      '5'
    );
  });
  it('value  prop', () => {
    cy.mount(<Checkbox {...label} value={100} data-cy="checkbox" />);
    cy.get('.MuiCheckbox-root input').should(
      'have.attr',
      'value',
      '100'
    );
  });
});
