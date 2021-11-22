/// <reference types="cypress" />

import Base from './base.page';

import {REGISTER_ADRESS as RG} from './components/mercado.elements'

export default class EditAddres extends Base {
    
    static clicaBtnMeuEndereco(){
        cy.intercept('/my-account/api/addresses').as('getEnd')
        super.getElementContaining('Meus endereços').click()
        cy.wait('@getEnd')
    }

    static validarUrl(){
        super.validateUrl('/my-account/addresses/')
    }

    static validarTextos(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.getElementContaining(user.nomeCompleto)
            super.verifyIfElementExists(RG.TXT_PRINCIPAL)
            super.verifyIfElementExists(RG.BTN_EDITAR)
        })
    }

    static clicarBtnEditar(){
        super.clickOnElement(RG.BTN_EDITAR)
    }

    static clicarBtnEditarEnd(){
        cy.intercept('/my-account/api/addresses/*').as('getAddress')
        super.getElementContaining('Editar').click()
        cy.wait('@getAddress')
    }

    static cadastrarEndereco(){
        cy.readFile('cypress/fixtures/endereco.json').then(end => {
            super.typeValue(RG.INP_END, end.endValido.endereco)
            cy.intercept('/my-account/api/address-zipcode/*').as('teste') // /* pega oque está para tras /** pega tudo oque está para tras
            super.typeValue(RG.INP_CEP, end.endValido.cep)
            cy.wait('@teste')
            super.typeValue(RG.INP_NUM, end.endValido.numero)
            super.typeValue(RG.INP_COMP, end.endValido.complemento)
        })
    }

    static validandoEndereco(){
        cy.readFile('cypress/fixtures/endereco.json').then(end => {
            var cep = end.endValido.cep
            var teste = cep.substring(0,5) + '-' + cep.substring(5)
            super.getElementContaining(`CEP: ${teste}`)
            super.getElementContaining(end.endValido.complemento)
            super.getElementContaining(end.endValido.numero)
            super.getElement(RG.MSG_SUCESSO).should('contain', 'Sucesso!').and('contain', 'Seus dados foram atualizados.')
        })
    }

    static validarSeBotaoEstaDesbilitado(){
        super.getElement(RG.BTN_EDITAR).should('be.disabled')
    }

    static preencherEnderecoEComplemento(){
        cy.readFile('cypress/fixtures/endereco.json').then(end => {
            super.getElement(RG.INP_END).clear()
            super.getElement(RG.INP_CEP).clear()
            super.getElement(RG.INP_NUM).clear()
            super.getElement(RG.INP_COMP).clear()
            super.typeValue(RG.INP_END, end.endValido.endereco)
            super.typeValue(RG.INP_COMP, end.endValido.complemento)
        })
    }

    static clicarBtnSalvar(){
        super.getElementContaining('Salvar alterações').click()
    }

    static validarMsgErro(){
        super.getElementContaining(`Informe o CEP.`)
        super.getElementContaining(`Informe o número (Use "s/n" caso não tenha número).`)
        super.getElementContaining(`O endereço não foi salvo! Tente novamente em alguns instantes.`)
    }
}