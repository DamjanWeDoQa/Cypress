import {alert} from '../common/base.page.js';
import {basePage} from '../common/base.page.js';
import { go } from '../common/base.page.js';
import {Contact, typeEmail, typeMessage, typeName} from './contact.page.js';
import {signUpEmailGenerator} from './contact.page.js';

describe ('Sign up', function () {
    let credentials;

    before ('Go to the main page', function () {
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
        }); 
        
        go.toHomePage();
        basePage.urlShouldContain('/demoblaze.com');
    });

    beforeEach ('Reload page', function(){
        basePage.reload();
    });
  
    it ('CONTACT: Should display modal after clicking on contact.', function(){
        Contact.clickOnContact();
    });

    it ('CONTACT: Should display close modal after clicking on X.', function(){
        Contact.clickOnContact();
        Contact.clickOnXButton();
        Contact.contactModalShoulNotBeVisible();
    });

    it ('CONTACT: Modal elements are visible.', function(){
        Contact.clickOnContact();
        Contact.contactUpModalShouldBeVisible();
    });

    it('CONTACT: A new message can be submitted and the correct Alert message is displayed.', function(){
        Contact.clickOnContact();
        Contact.contactUpModalShouldBeVisible();
        cy.wait(1000);
        var e_mail = signUpEmailGenerator();
        Contact.typeEmail(e_mail);
        Contact.typeName("Name");
        Contact.typeMessage("Test Message");
        Contact.sendMessage();
        cy.wait(1000);
        Contact.messgeAlertShouldHaveText("Thanks for the message!!")
    });

})