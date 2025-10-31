/// <reference types="cypress" />
const util = require('../../support/utils')
import login, {
    ERROR_MSG_EXISTING_USER
} from '../../pages/login/index'
import register from '../../pages/register/index'



describe('Testes de Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        cy.acessarLogin();
    });

    it('TC01 - Realizar um cadastro válido', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        login.fillRegisterForm(nomeUnico, email);
        register.fillCompleteRegisterForm();
        register.clickCreateAccount();
        register.checkAccountCreated();
    });

    it('TC05 - Cadastrar usuário com email existente', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        login.fillRegisterForm(nomeUnico, email);
        register.fillCompleteRegisterForm();
        register.clickCreateAccount();
        register.clickContinue();
        login.clickLogout();
        login.fillRegisterForm(nomeUnico, email);
        login.checkExistingUser(ERROR_MSG_EXISTING_USER)
    });
})