let LoginPage = require('../page-object/loginPage_loai2.js');

describe('Page object', function(){
    it('login to page ',async function(){

        let pageurl ='https://the-internet.herokuapp.com/login';
        let username ='tomsmith';
        let password ='SuperSecretPassword!';

        await browser.url(pageurl);
        await browser.pause(3000);
        await LoginPage.loginToPage(username,password);
        await browser.pause(10000);
        
    });
})