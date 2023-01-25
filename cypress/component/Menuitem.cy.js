import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

describe("Autocomplete", () => {

  const menuItem=".MuiMenuItem-root ";
  const sx={color:"red",background:"blue"};

  describe("should display MUI menuitem with ", () => {
    it("default values", () => {
      cy.mount(<MenuItem data-cy="MenuItem">Cypress Test</MenuItem>);
      cy.get(menuItem).should("exist").and("be.visible");
    });

    it("classes values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" classes={{root:"test-class"}}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.class","test-class");
    });

    it("autoFocus values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" autoFocus={true}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.class","Mui-focusVisible");
    });

    it("dense values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" dense={true}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.class","MuiMenuItem-dense");
    });
       
    it("divider values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" divider={true}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.class","MuiMenuItem-divider");
    });

    it("selected values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" selected={true}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.class","Mui-selected");
    });

    it("sx values", () => {
      cy.mount(<MenuItem data-cy="MenuItem" sx={sx}>Cypress Test</MenuItem>);
      cy.get(menuItem).should("have.css",sx);
    });

    it("disableGutters values", () => {
      cy.mount(<MenuItem data-cy="MenuItem"   disableGutters={true}>Profile</MenuItem>);
      cy.get(menuItem).should("not.have.class","MuiMenuItem-gutters");
    });

    it("childern values", () => {
      cy.mount(<MenuItem data-cy="MenuItem"  component={Button} children={<p>children</p>}>Profile</MenuItem>);
      cy.get(menuItem) 
    });
  });
});
