import loginPage from "../pages/loginPage"
import productosPage from "../pages/productosPage"

describe('testing3', () => {
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
  it.only("Primer producto se muestra correctamente", () => {
    productosPage.elements.imgBulto().should("exist")
    productosPage.elements.nombreBulto().should("exist").contains("Sauce Labs Backpack")
    productosPage.elements.precioBulto().should("exist").contains("29.99")
    productosPage.elements.bultoBtn().should("exist").contains("Add to cart")
})
})

context("Segunda prueba", () => {
    it.only("Segundo producto se muestra correctamente", () => {
      productosPage.elements.imgBike().should("exist")
      productosPage.elements.nombreBike().should("exist").contains("Sauce Labs Bike Light")
      productosPage.elements.precioBike().should("exist").contains("9.99")
      productosPage.elements.bikeBtn().should("exist").contains("Add to cart")
  })
  })

  context("Tercera prueba", () => {
    it.only("Tercer producto se muestra correctamente", () => {
      productosPage.elements.imgTshirt().should("exist")
      productosPage.elements.nombreTshirt().should("exist").contains("Sauce Labs Bolt T-Shirt")
      productosPage.elements.precioTshirt().should("exist").contains("15.99")
      productosPage.elements.tshirtBtn().should("exist").contains("Add to cart")
  })
  })
  context("Cuarta prueba", () => {
    it.only("Cuarto producto se muestra correctamente", () => {
      productosPage.elements.imgJacket().should("exist")
      productosPage.elements.nombreJacket().should("exist").contains("Sauce Labs Fleece Jacket")
      productosPage.elements.precioJacket().should("exist").contains("49.99")
      productosPage.elements.jacketBtn().should("exist").contains("Add to cart")
  })
  })
  context("Quinta prueba", () => {
    it.only("Quinto producto se muestra correctamente", () => {
      productosPage.elements.imgOnesie().should("exist")
      productosPage.elements.nombreOnesie().should("exist").contains("Sauce Labs Onesie")
      productosPage.elements.precioOnesie().should("exist").contains("7.99")
      productosPage.elements.onesieBtn().should("exist").contains("Add to cart")
  })
  })
  context("Sexta prueba", () => {
    it.only("Sexto producto se muestra correctamente", () => {
      productosPage.elements.imgTshirtRed().should("exist")
      productosPage.elements.nombreTshirtRed().should("exist").contains("Test.allTheThings() T-Shirt (Red)")
      productosPage.elements.precioTshirtRed().should("exist").contains("15.99")
  })
  })

})