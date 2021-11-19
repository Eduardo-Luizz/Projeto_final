/// <reference types="cypress" />

import Base from './base.page';
import {LOGIN as LG} from '../pages/components/mercado.elements'

export default class Login extends Base {

    static acessarMercado(){
        cy.visit('https://701523.commercesuite.com.br')
    }

    static acessarRotaLogin(){
        super.clickOnElement(LG.BTN_ENTRAR)
    }

    static validarUrl(){
        super.validateUrl('/central-do-cliente')
    }

    static validarMensagens(text){
        super.verifyIfTextIsVisible(text)
    }

    static validarSeBtnLoginExiste(){
        super.verifyIfElementExists(LG.BTN_LOGIN)
    }

    static clicaBtnLogar(){
        super.clickOnElement(LG.BTN_LOGIN)
    }

    static validarCompAbaLogin(){
        super.verifyIfElementExists(LG.BTN_SAIRLOGIN)
        super.validatePlaceholder(LG.INP_EMAIL, 'E-mail ou CPF/CNPJ')
        super.verifyIfElementExists(LG.BTN_CONTINUAR)
        super.verifyIfElementExists(LG.BTN_FACEBOOK)
    }

    static logar(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.typeValue(LG.INP_EMAIL, user.cpf)
            super.clickOnElement(LG.BTN_CONTINUAR)
            super.typeValue(LG.INP_PASSWORD, user.senha)
            super.clickOnElement(LG.BTN_PASS_SUBMIT)
            //super.validateText(user.nomeCompleto, user.nomeCompleto)
        })     
    }
}