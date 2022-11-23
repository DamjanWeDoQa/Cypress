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
  
    it ('About: Should display modal after clicking on contact.', function(){
        Contact.clickOnContact();
    });

    

})