/// <reference types="cypress" />
import home from '../../pages/home/index'


describe('Testes de Produto', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    it('TC10 - Verificar Subscription na Home', () => {
        home.checkHomePage();
        home.checkSubscriptionText();
        home.subscribe("teste@email.com");
        home.checkSubscriptionSucessMessage()
    });
})