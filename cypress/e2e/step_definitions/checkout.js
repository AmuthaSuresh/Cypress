//import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import {Given, When, Then,} from "@badeball/cypress-cucumber-preprocessor";

Given(/^Launch amal website (.*)$/, function (launchURL) {
   // cy.once("uncaught:exception", () => false);
    cy.visit(launchURL);
});
Then(/^Verify website is loaded$/, function () {
   // cy.once("uncaught:exception", () => false);
    cy.get("[id='search-bar']",{timeout: 20000}).should('be.visible');
});
Then(/^Search for a search term (.*)$/, function (value) {
    cy.once("uncaught:exception", () => false);
    cy.get(('#search-bar'),{timeout: 20000}).type(value);
});
Then(/^Search result PLP should display$/, function () {
    cy.once("uncaught:exception", () => false);
    cy.xpath(('//div[contains(text(),\'Filter\')]'),{timeout: 20000}).should('be.visible');
});
Then(/^Click on category$/, function () {
    cy.once("uncaught:exception", () => false);
    cy.get(('.categoriesDesktop_categoriesDesktop__xAGyd > :nth-child(2)'),{timeout: 20000}).click();
});
Then(/^Click on search icon$/, function () {
    cy.once("uncaught:exception", () => false);
    cy.get(('.MuiSvgIcon-root'),{timeout: 20000}).click();
});

Then(/^Click on view all$/, function () {
    cy.once("uncaught:exception", () => false);
    cy.xpath (('//a[contains(text(),\'VIEW ALL\')]'),{timeout: 20000}).click();
});