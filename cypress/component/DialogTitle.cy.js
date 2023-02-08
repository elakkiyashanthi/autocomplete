import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';

describe('DialogTitle', () => {
  const dialogContentClass = '.MuiDialogTitle-root';

  describe('should display  with ', () => {
    it('default values', () => {
      cy.mount(
        <DialogTitle> Dialog Title </DialogTitle>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
    });

    it('classes prop', () => {
      cy.mount(
        <DialogTitle classes={{ root: 'testClass' }}>
          
          Dialog Title 
        </DialogTitle>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).should('have.class', 'testClass');
    });
    it('children prop', () => {
      cy.mount(
        <DialogTitle>
          <button>Dialog Title</button>
        </DialogTitle>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).children().should('have.length', 1);
    });
    it('sx prop', () => {
      cy.mount(
        <DialogTitle sx={{ bgcolor: 'rgb(255,0,255)' }}>
           
          Dialog Title
        </DialogTitle>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).should('have.css', {
        bgcolor: 'rgb(255,0,255)',
      });
    });
  });
});
