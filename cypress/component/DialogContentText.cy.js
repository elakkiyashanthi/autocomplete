import React from 'react';
import { DialogContentText } from '@mui/material';

describe('DialogContentText', () => {
  const dialogContentClass = '.MuiDialogContentText-root';

  describe('should display  with ', () => {
    it('default values', () => {
      cy.mount(
        <DialogContentText> Dialog Content </DialogContentText>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
    });

   
    it('classes prop', () => {
      cy.mount(
        <DialogContentText classes={{ root: 'testClass' }}>
          {' '}
          Dialog Content{' '}
        </DialogContentText>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).should('have.class', 'testClass');
    });
    it('children prop', () => {
      cy.mount(
        <DialogContentText>
          <button>Dialog Content</button>
        </DialogContentText>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).children().should('have.length', 1);
    });
    it('sx prop', () => {
      cy.mount(
        <DialogContentText sx={{ bgcolor: 'rgb(255,0,255)' }}>
          {' '}
          Dialog Content{' '}
        </DialogContentText>
      );
      cy.get(dialogContentClass).should('exist').and('be.visible');
      cy.get(dialogContentClass).should('have.css', {
        bgcolor: 'rgb(255,0,255)',
      });
    });
  });
});
