import {alert} from '../common/base.page.js';
import {basePage} from '../common/base.page.js';

const aboutElements = {
    aboutLink: () => cy.get('a[data-target="#exampleModal"]'),
    aboutModal: () => cy.findByRole('dialog', {name: /about/i}),
    modalTitle: () => cy.get('#videoModalLabel'),
    xButton: () => cy.get('div[id="exampleModal"] span[aria-hidden="true"]'),
    sendButton: () => cy.get('button[onclick="send()"]'),
    closeButton: () => cy.get('div[id="exampleModal"] div[class="modal-footer"] button:nth-child(1)'),
    signUpButton: () => cy.findByRole('button', {  name: /sign up/i}),
    contactEmailField:() => cy.get("#recipient-email"),
    contactNameField:() => cy.get("#recipient-name"),
    messageField:()=> cy.get("#message-text")
}

export const About = {
    clickOnContact () {
        contactElements.contactLink().click();
        cy.wait(1000);
    },
    clickOnXButton () {
        contactElements.xButton().click();
    },
    clickOnTheCloseButton () {
       contactElements.contactLink().click();
       cy.wait(1000);
       contactElements.closeButton().click();
    },
    contactUpModalShouldBeVisible () {
 
      contactElements.closeButton().should('be.visible');
       contactElements.modalTitle().should('be.visible');
       contactElements.contactNameField().should('be.visible');
       contactElements.messageField().should('be.visible');
       contactElements.contactEmailField().should('be.visible');
       contactElements.xButton().should('be.visible');
       contactElements.sendButton().should('be.visible');
    },
    contactModalShoulNotBeVisible () {
       contactElements.closeButton().should('not.be.visible');
       contactElements.modalTitle().should('not.be.visible');
       contactElements.contactNameField().should('not.be.visible');
       contactElements.messageField().should('not.be.visible');
       contactElements.contactEmailField().should('not.be.visible');
       contactElements.xButton().should('not.be.visible');
       contactElements.sendButton().should('not.be.visible');
    },
    modalTitleShouldHaveText (text) {
        signUpElements.modalTitle().should('have.text', text)
    },
    
    contactAlertShouldHaveText (text) {
        alert.textEqualsTo(text)
    },
    typeEmail (email) {
        contactElements.contactEmailField().type(email);
     },
    typeName (name) {
        contactElements.contactNameField().type(name);
     },
     typeMessage (message) {
        contactElements.messageField().type(message);
     },
     sendMessage (){
        contactElements.sendButton().click();
     },
     messgeAlertShouldHaveText (text) {
        alert.textEqualsTo(text)
    },
}