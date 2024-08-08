let LoginPage = require('../page-object/loginPage_loai3.js');

describe('Page object', function(){
    it('login to page ',async function(){
        let pageurl ='https://the-internet.herokuapp.com/login';
        let username ='tomsmith';
        let password ='SuperSecretPassword!';

        await browser.url(pageurl);
        await LoginPage.inputUsername(username);
        await LoginPage.inputPassword(password);
        await LoginPage.clickonButton();

        await browser.pause(10000)

    }) 
})