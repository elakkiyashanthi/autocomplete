import React from 'react';
import { IconButton } from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';

describe('IconButton', () => {
  const ibutton = '.MuiIconButton-root';
  const sx = { color: 'red', background: 'blue' };

  describe('should display MUI menuitem with ', () => {
    it('default values', () => {
      cy.mount(
        <IconButton data-cy="iconButton">
          <AlarmIcon />
        </IconButton>
      );
      cy.get(ibutton).should('exist').and('be.visible');
    });
   
      it('color prop', () => {
        cy.mount(
          <IconButton  color="error" data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        cy.get(ibutton).should('have.class','MuiIconButton-colorError');
      });
      it('children prop', () => {
        cy.mount(
          <IconButton data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        cy.get(`${ibutton} svg`).should('have.attr','data-testid','AlarmIcon');
      });
      it('classes prop', () => {
        cy.mount(
          <IconButton  classes={{"root":'test-class'}} data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        cy.get(ibutton).should('have.class','test-class');
      }); 
    it('disabled prop', () => {
        cy.mount(
          <IconButton disabled  data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        cy.get(ibutton).should('have.class','Mui-disabled');
      });
      it('disableFocusRipple prop', () => {
        cy.mount(
          <IconButton disableFocusRipple  data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        cy.get(`${ibutton} span`).should('be.empty');
      });
  
      it('edge prop', () => {
        cy.mount(
          <IconButton edge="start"  data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        //.MuiIconButton-sizeLarge
        cy.get(ibutton).should('have.class','MuiIconButton-edgeStart');
      });
      it('size prop', () => {
        cy.mount(
          <IconButton size="large"  data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        //.MuiIconButton-sizeLarge
        cy.get(ibutton).should('have.class','MuiIconButton-sizeLarge');
      });
      it('sx prop', () => {
        cy.mount(
          <IconButton sx={sx}  data-cy="iconButton">
            <AlarmIcon />
          </IconButton>
        );
        //.MuiIconButton-sizeLarge
        cy.get(ibutton).should('have.css',sx);
      });

  });
});
