/// <reference types="cypress" />

import Base from './base.page';

import {REGISTER_ADRESS as RG} from '../pages/components/mercado.elements'

export default class RegisterAdress extends Base {
    
    static clicaBtnMeuEndereco(){
        super.getElementContaining('Meus endereços').click()
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
}