import loginPage from "../pages/loginPage"
import validarProdPage from "../pages/validarProdPage"

describe('testing3', () => {
  beforeEach(() => {
    cy.intercept('/service-worker.js',{
        body: undefined
    })
    cy.clearAllSessionStorage({log:true})
    cy.visit('https://www.saucedemo.com/')
  })
 context("Primer prueba", () => {
  it.only("Primer producto se valida correctamente y el boton Back to products", () => {
    loginPage.elements.userName().type("standard_user")
    loginPage.elements.password().type("secret_sauce")
    loginPage.clickOnloginBtn()
    validarProdPage.clickOnNombreBultoBtn()
    validarProdPage.elements.imgBulto().should("exist")
    validarProdPage.elements.precioBulto().should("exist").contains("29.99")
    validarProdPage.elements.bultoBtn().should("exist").contains("Add to cart")
    validarProdPage.clickOnBackToProducBtn()
})
})

context("Segunda prueba", () => {
    it.only("Segundo producto se valida correctamente y el boton Back to products", () => {
      loginPage.elements.userName().type("standard_user")
      loginPage.elements.password().type("secret_sauce")
      loginPage.clickOnloginBtn()
      validarProdPage.clickOnNombreBikeBtn()
      validarProdPage.elements.imgBike().should("exist")
      validarProdPage.elements.precioBike().should("exist").contains("9.99")
      validarProdPage.elements.bikeBtn().should("exist").contains("Add to cart")
      validarProdPage.clickOnBackToProducBtn()
  })
  })

  context("Tercera prueba", () => {
    it.only("Tercer producto se valida correctamente y el boton Back to products", () => {
      loginPage.elements.userName().type("standard_user")
      loginPage.elements.password().type("secret_sauce")
      loginPage.clickOnloginBtn()
      validarProdPage.clickOnNombreTshirtBtn()
      validarProdPage.elements.imgTshirt().should("exist")
      validarProdPage.elements.precioTshirt().should("exist").contains("15.99")
      validarProdPage.elements.tshirtBtn().should("exist").contains("Add to cart")
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  context("Cuarta prueba", () => {
    it.only("Cuarto producto se valida correctamente y el boton Back to products", () => {
      loginPage.elements.userName().type("standard_user")
      loginPage.elements.password().type("secret_sauce")
      loginPage.clickOnloginBtn()
      validarProdPage.clickOnNombreJacketBtn()
      validarProdPage.elements.imgJacket().should("exist")
      validarProdPage.elements.precioJacket().should("exist").contains("49.99")
      validarProdPage.elements.jacketBtn().should("exist").contains("Add to cart")
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  context("Quinta prueba", () => {
    it.only("Quinto producto se valida correctamente y el boton Back to products", () => {
      loginPage.elements.userName().type("standard_user")
      loginPage.elements.password().type("secret_sauce")
      loginPage.clickOnloginBtn()
      validarProdPage.clickOnNombreOnesieBtn()
      validarProdPage.elements.imgOnesie().should("exist")
      validarProdPage.elements.precioOnesie().should("exist").contains("7.99")
      validarProdPage.elements.onesieBtn().should("exist").contains("Add to cart")
      validarProdPage.clickOnBackToProducBtn()
  })
  })
  //tengo problema con el id
  context("Sexta prueba", () => {
    it.only("Sexto producto se valida correctamente y el boton Back to products" , () => {
      loginPage.elements.userName().type("standard_user")
      loginPage.elements.password().type("secret_sauce")
      loginPage.clickOnloginBtn()
      validarProdPage.clickOnNombreTshirtRedBtn()
      validarProdPage.elements.imgTshirtRed().should("exist")
      validarProdPage.elements.precioTshirtRed().should("exist").contains("15.99")
      validarProdPage.clickOnBackToProducBtn()
  })
  })

})