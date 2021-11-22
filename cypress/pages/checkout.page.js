import Base from './base.page';

import {CHECKOUT as CK} from './components/mercado.elements'

export default class Checkout extends Base {

    static clicarBtnContinuar(){
        super.getElementContaining('Continuar').click()
    }

    static validarUrl(){
        super.validateUrl('/checkout')
    }

//--------------------------------------------------------------------------------------------------------------------
    //Serve para verificar e clicar na validacao com base noque é pedido
    
    static preencherCheckout(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            super.typeValue(CK.INP_USER, user.email)
            super.clickOnElement(CK.BTN_CONTINUAR)
            cy.get('.ch-modal-content').should('not.be.visible')

            cy.readFile('cypress/fixtures/endereco.json').then(endereco =>{ // Precisa estar aqui devido a assincronia
                var botao 
                cy.get("[data-tray-tst=security_question]").then($securityQuestion => {
                    if ($securityQuestion.find("p:contains('Quais os primeiros digitos do seu CPF?')").length > 0) {
                        botao = user.cpf.substring(0,6)

                    } else if ($securityQuestion.find("p:contains('Qual o seu sobrenome?')").length > 0){
                        botao = user.nomeCompleto.split(' ')[1]
                    
                    } else if ($securityQuestion.find("p:contains('Quais os últimos digitos do seu CPF?')").length > 0){
                        botao = user.cpf.slice(-6) 

                    } else if($securityQuestion.find("p:contains('Qual seu endereço de entrega?')").length > 0){
                        botao = endereco.endValido.rua.split(' ')[1]
                    }

                super.getElement(CK.QLQ).contains(botao).click()

                })
            })
        })
    }

    //--------------------------------------------------------------------------------------------------------------------
    static preencherEmailInvalido(){
        super.typeValue(CK.INP_USER, `Fulano@qaqb.com.br`)
        super.clickOnElement(CK.BTN_CONTINUAR)
    }

    static validarMsgDeError(){
        super.verifyIfTextIsVisible(`Não foi possível se autenticar, por favor, tente novamente.`)
    }

    static preencherSenha(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
                super.typeValue(CK.INP_SENHA, user.senha)
        })
    }

    static clicBtnCont(){
        cy.intercept('POST', '/checkout/password').as('postPassword')
            super.clickOnElement(CK.BTN_CONTINUAR2)
        cy.wait('@postPassword')
    }

    static preencherCep(){
        cy.readFile('cypress/fixtures/endereco.json').then(cep => {
            super.typeValue(CK.INP_CEP, cep.endValido.cep)
        })
    }

    static clicarBtnPreencherCep(){
        cy.intercept('POST', '/checkout/api/**').as('getNum')
        super.clickOnElement(CK.BTN_CEP)
        cy.wait('@getNum')
    }

    static preencherNumero(){
        cy.readFile('cypress/fixtures/endereco.json').then(numero => {
            super.typeValue(CK.INP_NUM2, numero.endValido.numero)
        })
    }

    static clicarBtnSalvarDados(){
        super.getElementContaining('Salvar dados').click()
    }

    static validarDadosPessoais(){
        cy.readFile('cypress/fixtures/user.json').then(user => {
            var telCel = user.telCel
            var telCel = telCel.substring(0,0) + '(' + telCel.substring(0,2) + ') ' + telCel.substring(2,7) + '-' + telCel.substring(7)
            super.validateDivText(CK.DIV_INF_PESSOAIS, `Informações pessoais`)
            super.validateDivText(CK.DIV_INF_EMAIL, user.email)
            super.validateDivText(CK.DIV_INF_PESSOAIS, user.nomeCompleto)
            super.validateDivText(CK.DIV_INF_PESSOAIS, telCel)
        })
    }
}
