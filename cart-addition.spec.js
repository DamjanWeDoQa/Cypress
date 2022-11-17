import {basePage} from '../common/base.page.js';
import {logIn} from '../logIn/login.page.js';
import { go } from '../common/base.page.js';
import {buy} from './cart-addition.page.js';
import {cart} from './cart-addition.page.js';

describe('Select a product and add it to cart', function(){
    let credentials;
    let paying;
    before ('Go to the main page', function () {
        cy.fixture('credentials.json').then(function(creds){
            credentials = creds;

            // Access the site
            go.toHomePage();
            basePage.urlShouldContain('/demoblaze.com');

            // Login
            logIn.clickOnLogInLink();
            logIn.typeUser(credentials.user);
            logIn.typePassword(credentials.password);
            logIn.clickOnLogInButton();

            logIn.welcomeMessageShouldGreet(credentials.user);
            basePage.wait();

        })

        cy.fixture('payingData.json').then(function(data){
            paying = data;
             // Clear the cart in case there were products in
            buy.clickOnCart();
            cart.clear(paying.name, paying.creditCard);

        });

        
        
    });

    beforeEach ('Keep cookies and reload', function(){
        Cypress.Cookies.preserveOnce('tokenp_', 'user');
        basePage.reload();
        go.toHomePage();
    })

    it ('Should successfully load a product after clicking on it', function(){
        buy.clickOnProduct();

        basePage.urlShouldContain('/prod.')
    })

    it ('Should display product title', function() {
        buy.clickOnProduct();
        
        buy.productTitleShouldBeVisible();
    })
});