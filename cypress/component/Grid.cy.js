import React from 'react';
import { Grid } from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';

describe('IconButton', () => {
  const gridClass = '.MuiGrid-root';
 
  describe('should display MUI Grid  with ', () => {
    it('default values', () => {
      cy.mount(<Grid data-cy="gridCypress">Item</Grid>);
      cy.get(gridClass).should('exist').and('be.visible');
    });
    it('children prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress">
          <AlarmIcon />
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass)
        .children()
        .should('have.length', 1)
        .and('have.attr', 'data-testid', 'AlarmIcon');
    });
    it('classes prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" classes={{ root: 'testClass' }}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'testClass');
    });
  });
  describe('should display MUI Grid (Container) with ', () => {
    it('container prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container={true}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-container');
    });
    it('direction prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container direction={'column'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should(
        'have.class',
        'MuiGrid-direction-xs-column'
      );
    });
    it('wrap prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container wrap={'wrap-reverse'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should(
        'have.class',
        'MuiGrid-wrap-xs-wrap-reverse'
      );
    });
    it('spacing prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container spacing={10}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-spacing-xs-10');
    });
    it('rowSpacing prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container rowSpacing={1}>
          <Grid item>Grid Item</Grid>
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(`${gridClass} .MuiGrid-item`).should(
        'have.css',
        'padding-top',
        '8px'
      );
    });
    it('columnSpacing prop', () => {
      cy.mount(
        <Grid
          data-cy="gridCypress"
          container
          columnSpacing={{ xs: 5 }}
        >
          <Grid item>Grid Item</Grid>
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(`${gridClass} .MuiGrid-item`).should(
        'have.css',
        'padding-left',
        '40px'
      );
    });

    it('columns prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" container columns={16}>
          <Grid item xs={4}>
            Grid Item
          </Grid>
          <Grid item xs={4}>
            Grid Item
          </Grid>
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(`${gridClass} .MuiGrid-item`).should(
        'have.css',
        'flex-basis',
        '25%'
      );
    });
  });
  describe('should display MUI Grid (Item) with ', () => {
    it('item prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item={true}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-item');
    });

    it('zeroMinWidth prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item zeroMinWidth={true}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-zeroMinWidth');
    });
    it('lg prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item lg={5}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-grid-lg-5');
    });

    it('md prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item md={'auto'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-grid-md-auto');
    });
    it('sm prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item sm={'auto'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-grid-sm-auto');
    });
    it('xl prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item xl={'auto'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-grid-xl-auto');
    });
    it('xs prop', () => {
      cy.mount(
        <Grid data-cy="gridCypress" item xl={'auto'}>
          Grid Item
        </Grid>
      );
      cy.get(gridClass).should('exist').and('be.visible');
      cy.get(gridClass).should('have.class', 'MuiGrid-grid-xl-auto');
    });
  });
});
