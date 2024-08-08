const txt_username ='#username';
const txt_password ='#password';
const btn_login ='button[type="submit"]';

class loginPage_3{
    async  inputUsername(username){
        await $(txt_username).waitForDisplayed(); 
        await $(txt_username).setValue(username);
    }
    async  inputPassword(password){
        await  $(txt_password).waitForDisplayed();
        await $(txt_password).setValue(password);
    }
    clickonButton(){
        $(btn_login).click();
    }
}
module.exports = new loginPage_3();