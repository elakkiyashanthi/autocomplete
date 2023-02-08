import React from 'react';
import { DialogContent } from '@mui/material';
 
describe('DialogContent', () => {
  const dialogActionClass = '.MuiDialogContent-root';

  describe('should display  with ', () => {
    it('default values', () => {
      cy.mount(
        <DialogContent > Dialog Content </DialogContent>
      );
      cy.get(dialogActionClass).should('exist').and('be.visible');
    });
    
    it('dividers prop', () => {
        cy.mount(
          <DialogContent dividers > Dialog Content</DialogContent>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('not.have.css',"MuiDialogContent-dividers");

      });
    it('classes prop', () => {
        cy.mount(
          <DialogContent classes={{"root":"testClass"}} > Dialog Content </DialogContent>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('have.class',"testClass");

      });
      it('children prop', () => {
        cy.mount(
          <DialogContent  ><button>Dialog Content</button></DialogContent>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).children().should("have.length",1);

      });
      it('sx prop', () => {
        cy.mount(
          <DialogContent sx={{bgcolor: 'rgb(255,0,255)'}} > Dialog Content </DialogContent>
        );
        cy.get(dialogActionClass).should('exist').and('be.visible');
        cy.get(dialogActionClass).should('have.css',{bgcolor: 'rgb(255,0,255)'});

      });
  });
});
