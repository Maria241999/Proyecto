class menuPage{

   
    elements ={
        menuBtn : () => cy.getById("react-burger-menu-btn"),
        cerrarMenuBtn : () => cy.getById("react-burger-cross-btn"),
        allItems : () => cy.getById("inventory_sidebar_link"),
        about : () => cy.getById("about_sidebar_link"),
        logout : () => cy.getById("logout_sidebar_link"),
        resetApp : () => cy.getById("reset_sidebar_link")
    }

    clickOnMenuBtn(){
        this.elements.menuBtn().click()
    }
    clickOnCerrarMenuBtn(){
        this.elements.cerrarMenuBtn().click()
    }


}
module.exports = new menuPage();