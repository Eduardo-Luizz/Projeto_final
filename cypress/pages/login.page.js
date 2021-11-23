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
        })     
    }

    static validarDadosPessoais(){
        cy.readFile('cypress/fixtures/user.json').then(user =>{
            var telCel = user.telCel
            var telCel = telCel.substring(0,0) + '(' + telCel.substring(0,2) + ') ' + telCel.substring(2,7) + '-' + telCel.substring(7)
            super.getElementContaining(`Nome completo ${user.nomeCompleto}`)
            super.getElementContaining(`E-mail ${user.email}`)
            super.getElementContaining(`CPF ${user.cpf}`)
            super.getElementContaining(`Data de nascimento ${user.dataNasc}`)
            super.getElementContaining(`Telefone celular ${telCel}`)
        })
    }

    static validarNome(){
        cy.readFile('cypress/fixtures/user.json').then(name =>{
            super.getElementContaining(`Olá ${name.nomeCompleto}`)
        })
    }

    static logarInvalido(){
        super.typeValue(LG.INP_EMAIL, `01236578900`)
        super.clickOnElement(LG.BTN_CONTINUAR)
    }

    static validarMsgErroNoUser(){
        super.getElementContaining(`Dados inválidos, digite novamente!`)
    }

    static logarSenhaInvalida(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.typeValue(LG.INP_EMAIL, user.cpf)
            super.clickOnElement(LG.BTN_CONTINUAR)
            super.typeValue(LG.INP_PASSWORD, 125487)
            super.clickOnElement(LG.BTN_PASS_SUBMIT)
        })
    }

    static validarMsgErroSenha(){
        super.getElementContaining(`Autenticação incorreta.`)
    }

    static validarComponentes(){
        super.getElementContaining(`Minha conta`)
        super.getElementContaining(`Meus pedidos`)
        super.getElementContaining(`Meus dados`)
        super.getElementContaining(`Meus endereços`)
        super.getElementContaining(`Avaliação dos produtos`)
        super.getElementContaining(`Lista de espera`)
        super.getElementContaining(`Trocas e devoluções`)
        super.getElementContaining(`Alterar senha`)
        super.getElementContaining(`Sair`)
    }
}