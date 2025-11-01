/// <reference types="cypress" />
const util = require('../../support/utils')
import menu from '../../pages/menu/index'
import home from '../../pages/home/index'
import cart from '../../pages/cart/index'
import login from '../../pages/login/index'
import register from '../../pages/register/index'


describe('Testes de Produto', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        cy.acessarLogin();
    });

    it('TC15- Place Order: Register before Checkout', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        const pwd = "1234"
        const productsId = [1, 2, 3];
        const comment = "Comment for use in tests"

        login.fillRegisterForm(nomeUnico, email);
        register.fillCompleteRegisterForm(pwd);
        register.clickCreateAccount();
        register.checkAccountCreated();
        register.clickContinue();
        productsId.forEach(productId => {
            cart.addProductCart(productId);
            cart.clickContinueShopping();
        });
        menu.navigateToCart();
        cart.checkCartPage();
        cart.checkout(productsId);
        cart.setComment(comment);
        cart.clickPlaceOrder();
        cart.checkPaymentPage();
        cart.fillPaymentForm();
        cart.clickPayAndConfirmOrder();
        cart.checkOrderPlaced();
        home.deleteAccount();
    });
})

