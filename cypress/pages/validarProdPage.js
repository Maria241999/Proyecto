class validarProdPage{

   
    elements ={
        imgBulto : () => cy.getByClass("inventory_details_img"),
        nombreBulto : () => cy.getByClass("inventory_details_name large_size"),
        precioBulto : () => cy.getByClass("inventory_details_price"),
        bultoBtn : () => cy.getById("add-to-cart-sauce-labs-backpack"),
        nombreBultoBtn : () => cy.getById("item_4_title_link"),
        
        imgBike : () => cy.getByClass("inventory_details_img"),
        nombreBike : () => cy.getByClass("inventory_details_name large_size"),
        precioBike : () => cy.getByClass("inventory_details_price"),
        bikeBtn : () => cy.getById("add-to-cart-sauce-labs-bike-light"),
        nombreBikeBtn : () => cy.getById("item_0_title_link"),

        imgTshirt : () => cy.getByClass("inventory_details_img"),
        nombreTshirt : () => cy.getByClass("inventory_details_name large_size"),
        precioTshirt : () => cy.getByClass("inventory_details_price"),
        tshirtBtn : () => cy.getById("add-to-cart-sauce-labs-bolt-t-shirt"),
        nombreTshirtBtn : () => cy.getById("item_1_title_link"),

        imgJacket : () => cy.getByClass("inventory_details_img"),
        nombreJacket : () => cy.getByClass("inventory_details_name large_size"),
        precioJacket : () => cy.getByClass("inventory_details_price"),
        jacketBtn : () => cy.getById("add-to-cart-sauce-labs-fleece-jacket"),
        nombreJacketBtn : () => cy.getById("item_5_title_link"),

        imgOnesie : () => cy.getByClass("inventory_details_img"),
        nombreOnesie : () => cy.getByClass("inventory_details_name large_size"),
        precioOnesie : () => cy.getByClass("inventory_details_price"),
        onesieBtn : () => cy.getById("add-to-cart-sauce-labs-onesie"),
        nombreOnesieBtn : () => cy.getById("item_2_title_link"),

        imgTshirtRed : () => cy.getByClass("inventory_details_img"),
        nombreTshirtRed : () => cy.getByClass("inventory_details_name large_size"),
        precioTshirtRed : () => cy.getByClass("inventory_details_price"),
        tshirtRedBtn : () => cy.getById("add-to-cart-test.allthethings()-t-shirt-(red)"),
        nombreTshirtRedBtn: () => cy.getById("item_3_title_link"),

        backToProducBtn : () => cy.getById("back-to-products")
    }

    clickOnBultoBtn(){
        this.elements.bultoBtn().click()
    }
    clickOnBikeBtn(){
        this.elements.bikeBtn().click()
    }
    clickOnTshirtBtn(){
        this.elements.tshirtBtn().click()
    }
    clickOnJacketBtn(){
        this.elements.jacketBtn().click()
    }
    clickOnOnesieBtn(){
        this.elements.onesieBtn().click()
    }
    clickOnTshirtRedBtn(){
        this.elements.tshirtRedBtn().click()
    }
    clickOnBackToProducBtn(){
        this.elements.backToProducBtn().click()
    }
    clickOnNombreBultoBtn(){
        this.elements.nombreBultoBtn().click()
    }
    clickOnNombreBikeBtn(){
        this.elements.nombreBikeBtn().click()
    }
    clickOnNombreTshirtBtn(){
        this.elements.nombreTshirtBtn().click()
    }
    clickOnNombreJacketBtn(){
        this.elements.nombreJacketBtn().click()
    }
    clickOnNombreOnesieBtn(){
        this.elements.nombreOnesieBtn().click()
    }
    clickOnNombreTshirtRedBtn(){
        this.elements.nombreTshirtRedBtn().click()
    }

}
module.exports = new validarProdPage();