import {basePage} from '../common/base.page.js';
import { go } from '../common/base.page.js';
import {signUp} from './sign-up.page.js';

describe ('Sign up', function () {
    let credentials;

    before ('Go to the main page', function () {
        // load credentials
        cy.fixture('credentials.json').then(function(cred){
            credentials = cred;
        }); 
        
        // Access the site
        go.toHomePage();
        basePage.urlShouldContain('/demoblaze.com');
    });

    beforeEach ('Reload page', function(){
        basePage.reload();
    });

    it ('Should display modal after clicking on sign up', function(){
        signUp.clickOnSignUp();
        
        signUp.signUpModalShouldBeVisible();
    });

    it ('Should display the text "Sign Up" in the sign up modal title', function(){
        signUp.clickOnSignUp();

        signUp.modalTitleShouldHaveText('Sign up');
    });

    it ('Should close modal after clicking on cross button', function() {
        signUp.clickOnSignUp();
        signUp.clickOnCrossButton();

        signUp.signUpModalShoulNotBeVisible();
    });

    it ('Should display an alert asking to fill in the required data if nothing is typed', function(){
        signUp.clickOnSignUp();
        signUp.clickOnSignUpButton();

        signUp.signUpAlertShouldHaveText('Please fill out Username and Password.');
    });

   
})