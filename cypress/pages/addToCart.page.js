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
}