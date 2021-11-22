/// <reference types="cypress" />


import faker from 'faker';

// Necessário para poder preencher o cpf
const { fakerBr } = require('js-brasil');

import Base from './base.page';
import {REGISTER_USER as RU} from './components/mercado.elements'


export default class RegisterUser extends Base {
    
    static validarUrl(){
        super.validateUrl('/');
    }

    static acessarMercado(){
        cy.visit('https://701523.commercesuite.com.br')
    }


    static validarComponentes(){
        super.verifyIfElementIsVisible(RU.IMG)
        super.validateText(RU.TXT_NOME, '*Nome Completo:')
        super.validateText(RU.TXT_DATA, 'Data Nascimento:')
        super.validateText(RU.TXT_CPF, 'CPF:')
        super.validateText(RU.TXT_FIX, 'Telefone Fixo ou Comercial:')
        super.validateText(RU.TXT_CELL, 'Telefone Celular:')
        super.validateText(RU.TXT_EMAIL, 'E-mail:')
        super.validateText(RU.TXT_EMAIL2, '*Digite novamente:')
        super.validateText(RU.TXT_SENHA, '*Crie sua')
        super.validateText(RU.TXT_SENHA2, '*Digite novamente:')
        super.getElementContaining('Cadastro de novo cliente')
    }

    static acessarRotaCadastro(){
        cy.intercept('GET', 'https://701523.commercesuite.com.br/cadastro').as('wait_loading')
        super.verifyIfElementExists(RU.BTN_CADASTRO)
        super.clickOnElement(RU.BTN_CADASTRO)
        cy.wait('@wait_loading')
        
    }

    static cadastrarUsuarioValido(){
        
        //Gerei um usuário por comands
        cy.geradorDeFixture()

        //Li oq gerei e preenchi nos campos do site
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.typeValue(RU.INP_NAME, user.nomeCompleto)
            super.typeValue(RU.INP_DATANASC, user.dataNasc)
            super.typeValue(RU.INP_CPF, user.cpf)
            super.typeValue(RU.INP_TELCEL, user.telCel)
            super.typeValue(RU.INP_EMAIL, user.email)
            super.typeValue(RU.INP_EMAIL2, user.email)
            super.typeValue(RU.INP_SENHA, user.senha)
            super.typeValue(RU.INP_SENHA2, user.senha)
            super.verifyIfElementExists(RU.BTN_AVANCAR)
            super.clickOnElement(RU.BTN_AVANCAR)
        })
    }

    static validarMsg(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.getElementContaining(`Prezado Sr(a) ${user.nomeCompleto}`)
            super.getElementContaining(`Seu cadastro foi efetuado com sucesso!`)
            super.getElementContaining(`Estamos direcionando para a página inicial.`)
            super.getElementContaining(`Aguarde alguns instantes...`)
        })
    }

    static validarRedirecionamento(){
        super.validateUrl('/loja/loja.php?loja=')
    }
}