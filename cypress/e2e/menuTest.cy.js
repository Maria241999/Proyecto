import menuPage from "../pages/menuPage"
import loginPage from "../pages/loginPage"

describe('testing2', () => {
  beforeEach(() => {
    cy.intercept('/service-worker.js',{
      body: undefined
  })
    cy.clearAllSessionStorage({log:true})
    cy.visit('https://www.saucedemo.com/')
    loginPage.elements.userName().type("standard_user")
    loginPage.elements.password().type("secret_sauce")
    loginPage.clickOnloginBtn()
  })
 context("Primer prueba", () => {
  it.only("Se muestran opciones correctas en el menu", () => {
    menuPage.clickOnMenuBtn()
    menuPage.elements.allItems().should("exist").contains("All Items")
    menuPage.elements.about().should("exist").contains("About")
    menuPage.elements.logout().should("exist").contains("Logout")
    menuPage.elements.resetApp().should("exist").contains("Reset App State")
  })
})
context("Segunda prueba", () => {
  it.only("Se muestra y oculta correctramente el menu", () => {
    menuPage.clickOnMenuBtn()
    menuPage.clickOnCerrarMenuBtn()
  })
})

})