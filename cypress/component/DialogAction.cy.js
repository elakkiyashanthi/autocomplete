import React from 'react';
import { DialogActions } from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';

describe('DialogActions', () => {
  const dialogActionClass = '.MuiDialogActions-root';

  describe('should display  with ', () => {
    it('default values', () => {
      cy.mount(
        <DialogActions data-cy="gridCypress"> OK </DialogActions>
      );
      cy.get(dialogActionClass).should('exist').and('be.visible');
    });
    
    it('disableSpacing prop', () => {
        cy.mount(
          <DialogActions disableSpacing data-cy="gridCypress"> OK</DialogActions>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('not.have.css',"MuiDialogActions-spacing");

      });
    it('classes prop', () => {
        cy.mount(
          <DialogActions classes={{"root":"testClass"}} data-cy="gridCypress"> OK </DialogActions>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('have.class',"testClass");

      });
      it('children prop', () => {
        cy.mount(
          <DialogActions  data-cy="gridCypress"><button>OK</button></DialogActions>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).children().should("have.length",1);

      });
      it('sx prop', () => {
        cy.mount(
          <DialogActions sx={{bgcolor: 'rgb(255,0,255)'}} data-cy="gridCypress"> OK </DialogActions>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('have.css',{bgcolor: 'rgb(255,0,255)'});

      });
  });
});
