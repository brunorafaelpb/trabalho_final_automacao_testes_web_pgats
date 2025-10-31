/// <reference types="cypress" />
const util = require('../../support/utils')
import menu from '../../pages/menu/index'
import contact from '../../pages/contact/index'
import contactData from '../../fixtures/contact.json'



describe('Testes de Contato', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    it('TC06 - Enviar mensagem através do formulário de contato', () => {
        menu.navigateToContectUs()
        contact.fillContactForm(
            contactData.name,
            contactData.email,
            contactData.subject,
            contactData.message)
        contact.selectFile('contact.json')
        contact.submitMessage()
        contact.checkDataSubmit()
    });
})