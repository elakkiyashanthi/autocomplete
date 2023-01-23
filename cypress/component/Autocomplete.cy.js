import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

describe('Autocomplete', () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];
  it('default values', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )}
      />
    );
    cy.get('[data-cy=autocomplete]').should('exist').and('be.visible')

  });
  // autoComplete
  it('autoHighlight property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} autoHighlight={true}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root').click();
    cy.get('.MuiAutocomplete-listbox li').first().should('have.class', 'Mui-focused')
  });
  it('clearText property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} clearText={'clear item'}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root').click();
    cy.get('.MuiAutocomplete-listbox li').first().click();
    cy.get('.MuiAutocomplete-endAdornment button').should('have.attr', 'aria-label', 'clear item')

  });
  it('disabled property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} disabled={true}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').should('be.disabled')

  });
  it('id property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} id={"movies-list"} 
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').should('have.id', 'movies-list')

  }); 
  it('inputValue property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} value={{ label: 'Pulp Fiction', year: 1994 }}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').should('have.value', 'Pulp Fiction')

  });
  it('fullWidth property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} fullWidth={true}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root').should('have.class','MuiAutocomplete-fullWidth');
  });
  it('loading and loadingText property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} fullWidth={true}   loading={true} loadingText={'Loading Data'}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').type('66');
    cy.get('.MuiAutocomplete-loading').should('be.visible');
    cy.get('.MuiAutocomplete-loading').invoke('text').then((text => {
      expect(text.trim()).to.eq('Loading Data')
  }));
  });
  it('size property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} size={'small'}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').should('have.class','MuiInputBase-inputSizeSmall');
    
  });
  it('readOnly property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} readOnly={true}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root input').should('have.attr','readOnly');
  });
  it('autoSelect property', () => {
    cy.mount(
      <Autocomplete data-cy="autocomplete" options={top100Films} autoSelect={true}
        renderInput={(params) => (
          <TextField {...params} label="Movie" />
        )} />
    );
    cy.get('.MuiAutocomplete-root').click();
    cy.get('.MuiAutocomplete-root').type('Schindler');
    cy.get('.MuiAutocomplete-listbox li').trigger('mousedown')
    cy.get('.MuiAutocomplete-listbox li').first().focus()
    cy.get('.MuiAutocomplete-listbox li').focus()

    // cy.get('.MuiAutocomplete-listbox li').focused()
    // cy.get('.MuiAutocomplete-root').trigger('mouseup')
    // cy.get('.MuiAutocomplete-root').click('topRight')

    // cy.get('.MuiAutocomplete-root input').click(0,0);
     cy.get('.MuiAutocomplete-root').click(-0,0);

    // cy.get('.MuiAutocomplete-listbox li').first().select()
    // cy.get('.MuiAutocomplete-listbox li').first().should('have.class', 'Mui-focused')
  });
});
