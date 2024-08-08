const txt_username ='#username';
const txt_password ='#password';
const btn_login ='button[type="submit"]';

class loginPage{

    get username(){
        return $(txt_username);
    }
    get password(){
        return $(txt_password);
    }
    get loginButton(){
        return $(btn_login);
    }
    loginToPage(username,password){
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginButton.click();
    }
}
module.exports = new loginPage();