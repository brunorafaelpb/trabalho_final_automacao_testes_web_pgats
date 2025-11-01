/// <reference types="cypress" />
const util = require('../../support/utils')
import menu from '../../pages/menu/index'
import product from '../../pages/product/index'



describe('Testes de Produto', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    it('TC08 - Verificar todos os produtos e página de detalhes do produto', () => {
        menu.navigateToProducts()
        product.checkAllProductsPage();
        product.clickFirstProduct();
        product.checkProductDetailsPage();
    });

    it('TC09 - Buscar produto', () => {
        menu.navigateToProducts()
        product.checkAllProductsPage();
        product.searchProduct("white")
        product.checkProductListSearched("white")
    });
})