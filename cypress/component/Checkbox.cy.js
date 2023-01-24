import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

describe('Autocomplete', () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  it('default values', () => {
    cy.mount(  <Checkbox {...label}  data-cy='checkbox'/> );
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible')
  });
  it('inputProps prop', () => {
    cy.mount(  <Checkbox {...label}  checked data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root input').should('have.attr','aria-label','Checkbox demo');
  });
  it('checked prop', () => {
    cy.mount(  <Checkbox {...label}  checked data-cy='checkbox'/> );
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible');
    cy.get('.MuiCheckbox-root').should('have.class','Mui-checked');

  });
  it('defaultChecked prop', () => {
    cy.mount(  <Checkbox {...label}  defaultChecked data-cy='checkbox'/> );
    cy.get('[data-cy=checkbox]').should('exist').and('be.visible');
    cy.get('.MuiCheckbox-root').should('have.class','Mui-checked');

  }); 
  it('disabled prop', () => {
    cy.mount(  <Checkbox {...label}  disabled data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root').should('have.class','Mui-disabled');
  });
  it('size-small prop', () => {
    cy.mount(  <Checkbox {...label}  size={'small'} data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root svg').should('have.class','MuiSvgIcon-fontSizeSmall') 
  });
  it('required prop', () => {
    cy.mount(  <Checkbox {...label}  required={true}  data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root input').should('have.attr','required')
  });  
  it('color prop', () => {
    cy.mount(  <Checkbox {...label}  color='error' data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root').should('have.class','MuiCheckbox-colorError')
  });
  it('disableRipple prop', () => {
    cy.mount(  <Checkbox {...label}  disableRipple={false} data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root span').should('be.empty')
  });
  it('indeterminate prop', () => {
    cy.mount(  <Checkbox {...label}  indeterminate={true} data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root').should('have.class','MuiCheckbox-indeterminate')
  });
  it('sx prop', () => {
    cy.mount(  <Checkbox {...label}  sx={{color:'pink'}} data-cy='checkbox'/> );
    cy.get('.MuiCheckbox-root').should('have.css',{color:'pink'})
  });
});
