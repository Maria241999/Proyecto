class productosPage{

   
    elements ={
        imgBulto : () => cy.getById("item_4_img_link"),
        nombreBulto : () => cy.getById("item_4_title_link"),
        precioBulto : () => cy.getByClass("inventory_item_price"),
        bultoBtn : () => cy.getById("add-to-cart-sauce-labs-backpack"),
        nombreBultoBtn : () => cy.getById("item_4_title_link"),
        removeBultoBtn : () => cy.getById("remove-sauce-labs-backpack"),
        carritoBtn : () => cy.getById("shopping_cart_container"),

        imgBike : () => cy.getById("item_0_img_link"),
        nombreBike : () => cy.getById("item_0_title_link"),
        precioBike : () => cy.getByClass("inventory_item_price"),
        bikeBtn : () => cy.getById("add-to-cart-sauce-labs-bike-light"),
        nombreBikeBtn : () => cy.getById("item_0_title_link"),

        imgTshirt : () => cy.getById("item_1_img_link"),
        nombreTshirt : () => cy.getById("item_1_title_link"),
        precioTshirt : () => cy.getByClass("inventory_item_price"),
        tshirtBtn : () => cy.getById("add-to-cart-sauce-labs-bolt-t-shirt"),
        nombreTshirtBtn : () => cy.getById("item_1_title_link"),

        imgJacket : () => cy.getById("item_5_img_link"),
        nombreJacket : () => cy.getById("item_5_title_link"),
        precioJacket : () => cy.getByClass("inventory_item_price"),
        jacketBtn : () => cy.getById("add-to-cart-sauce-labs-fleece-jacket"),
        nombreJacketBtn : () => cy.getById("item_5_title_link"),

        imgOnesie : () => cy.getById("item_2_img_link"),
        nombreOnesie : () => cy.getById("item_2_title_link"),
        precioOnesie : () => cy.getByClass("inventory_item_price"),
        onesieBtn : () => cy.getById("add-to-cart-sauce-labs-onesie"),
        nombreOnesieBtn : () => cy.getById("item_2_title_link"),

        imgTshirtRed : () => cy.getById("item_3_img_link"),
        nombreTshirtRed : () => cy.getById("item_3_title_link"),
        precioTshirtRed : () => cy.getByClass("inventory_item_price"),
        tshirtRedBtn : () => cy.getById("add-to-cart-test.allthethings\(\)-t-shirt-\(red\)"),
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
    clickOnRemoveBultoBtn(){
        this.elements.removeBultoBtn().click()
    }
    clickOnCarritoBtn(){
        this.elements.carritoBtn().click()
    }

}
module.exports = new productosPage();