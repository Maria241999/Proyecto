import loginPage from "../pages/loginPage"
import homePage from "../pages/loginPage"

describe('testing1', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
 context("Primer prueba", () => {
  it.only("login incorrecto vacios", () => {
    loginPage.elements.userName().type(" ")
    loginPage.elements.password().type(" ")
    loginPage.clickOnloginBtn()
    loginPage.elements.Message().should("exist").contains("Epic sadface")
  })
})
context("Segunda prueba", () => {
  it.only("login password incorrecto", () => {
    loginPage.elements.userName().type("standard_user")
    loginPage.elements.password().type("secret_saucess")
    loginPage.clickOnloginBtn()
    loginPage.elements.Message().should("exist").contains("Epic sadface: Username and password do not match")
  })
})
context("Tercer prueba", () => {
  it.only("login correcto", () => {
    loginPage.elements.userName().type("standard_user")
    loginPage.elements.password().type("secret_sauce")
    loginPage.clickOnloginBtn()
  })
})

})