class loginPage{

   
    elements ={
        userName : () => cy.getById("user-name"),
        password : () => cy.getById("password"),
        loginBtn : () => cy.getById("login-button"),
        Message : () => cy.getByData("error")
    }

    clickOnloginBtn(){
        this.elements.loginBtn().click()
    }


}
module.exports = new loginPage();