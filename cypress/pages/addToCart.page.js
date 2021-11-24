/// <reference types="cypress" />

import Base from './base.page';

import {ADD_TO_CART as ADDC} from '../pages/components/mercado.elements'

export default class AddToCart extends Base {

    static validarUrl(){
        super.validateUrl('/')
    }

    static clicarBtnLoja(){
        super.clickOnElement(ADDC.BTN_ACESSAR_LOJA)
    }

    static clicarAdcProduto(){
        super.getElement(ADDC.BTN_ADC_1 ,1).click()
        super.getElement(ADDC.BTN_ADC).click()
    }

    static clicarAdcProduto2() {
        super.getElement(ADDC.BTN_ADC_1 ,2).click()
        super.getElement(ADDC.BTN_ADC).click()
    }

    static clicarAdcProduto3(){
        super.getElement(ADDC.BTN_ADC_1 ,3).click()
        super.getElement(ADDC.BTN_ADC).click()
    }

    static validandoQtd(){
        super.getElement(ADDC.BTN_ADC_ARROZ).should('have.value', 2)
    }

    static clicarBtnCarrinho(){
        super.clickOnElement(ADDC.BTN_CARRINHO)
    }

    static validandoSeOsComponentesEstaoVisiveis(){
        super.verifyIfElementIsVisible(ADDC.TXT_ARROZ)
        super.getElementContaining('Quantidade: 2')
        super.getElementContaining('R$ 12.00')
        super.verifyIfElementIsVisible(ADDC.EXC_PRODUTO)
        super.getElement(ADDC.TXT_VALOR).should('contain', '24,00')
    }

    static finalizarPedido(){
        super.getElementContaining('Finalizar pedido').click({ force: true})
    }

    static validarItemNoCarrinho(){
        super.getElementContaining(`ÓLEO DE GIRASSOL TIPO 1 LIZA`)
        super.getElementContaining(`Marca: Cargill Brasil`)
        super.getElement(ADDC.BTN_CAR_QTD, 0).should('have.value', 2)
        super.getElement(ADDC.TXT_PRICE, 0).should('contain', 'R$ 24,00')
        super.getElement(ADDC.TXT_VALUE, 0).should('contain', '(R$ 12,00 cada)')
    }

    static clicarAdcProdutoTesteNeg(){
        super.getElement(ADDC.BTN_ADC_1 ,3).click()
        super.getElement(ADDC.BTN_ADC).click()
        super.getElement(ADDC.BTN_ADC_1 ,5).click({force: true})
        super.getElement(ADDC.BTN_ADC_1 ,4).click({force: true})
        super.getElement(ADDC.BTN_ADC_1 ,2).click({force: true})
        super.getElement(ADDC.BTN_ADC_1 ,1).click({force: true})
        super.getElement(ADDC.BTN_ADC_1 ,0).click({force: true})
    }

    static removerProdutoCarrinho(){
        super.getElement(ADDC.BTN_CARR_REMOVER, 0).click({force: true})
    }

    static clicarBtnLimparCarrinho(){
        super.clickOnElement(ADDC.BTN_LIMPAR_CARRINHO)
    }

    static clicarBtnFecharCarrinho(){
        super.clickOnElement(ADDC.BTN_FECHAR)
    }

    static validarQuantidadeEPreco(){
        super.getElement(ADDC.IMG_QUANTIDADE).should('contain', '0')
        super.getElement(ADDC.IMG_PRECO).should('contain', `R$ 0,00`)
    }

    static validarMegCarrinhoVazio(){
        super.getElementContaining(`Seu carrinho está vazio.`)
    }

    static validarUrlCarrinhoVazio(){
        super.validateUrl('/checkout/')
    }

}