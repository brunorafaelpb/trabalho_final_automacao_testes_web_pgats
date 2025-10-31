/// <reference types="cypress" />
const util = require('../../support/utils')
import login, {
    ERROR_MSG_INCORRECT_LOGIN
} from '../../pages/login/index'
import register from '../../pages/register/index'



describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        cy.acessarLogin();
    });

    it('TC02 - Realizar login válido', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        const pwd = "1234"
        login.fillRegisterForm(nomeUnico, email);
        register.fillCompleteRegisterForm(pwd);
        register.clickCreateAccount();
        register.checkAccountCreated();
        register.clickContinue();
        login.clickLogout();
        login.fillLoginForm(email, pwd);
        login.checkLoggedUser(nomeUnico);
    });

    it('TC03 - Realizar login inválido', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        const pwd = "1234"
        login.fillLoginForm(email, pwd);
        login.checkIncorrectLogin(ERROR_MSG_INCORRECT_LOGIN);
    });

    it('TC04 - Realizar logout', () => {
        const nomeUnico = util.createUniqueName("brTest");
        const email = `${nomeUnico}@email.com`;
        const pwd = "1234"
        login.fillRegisterForm(nomeUnico, email);
        register.fillCompleteRegisterForm(pwd);
        register.clickCreateAccount();
        register.checkAccountCreated();
        register.clickContinue();
        login.clickLogout();
        login.checkLogout();
    });
})