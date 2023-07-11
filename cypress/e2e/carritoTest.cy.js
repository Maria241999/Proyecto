import productosPage from "../pages/productosPage"
import loginPage from "../pages/loginPage"

describe('testing5', () => {
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
    it.only("Agregar y remover producto desde el inventario", () => {
     productosPage.clickOnBultoBtn()
     productosPage.clickOnRemoveBultoBtn()
    })
  })
  context("Segunda prueba", () => {
    it.only("Agregar y remover producto desde el carrito", () => {
     productosPage.clickOnBultoBtn()
     productosPage.clickOnCarritoBtn()
     productosPage.clickOnRemoveBultoBtn()
    })
  })
})
  
  