import Login from '../pages/login.page'
import AddToCart from '../pages/addToCart.page'
import Checkout from '../pages/checkout.page'

describe('Testes positivos na rota checkout', () => {
    beforeEach(() => {
        Login.acessarMercado()
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })

    it('Deve finalizar uma compra e validar a url', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto3()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        Checkout.clicarBtnContinuar()
        Checkout.validarUrl()
    })

    it('Deve preencher checkout e validar os dados pessoais', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto3()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        Checkout.clicarBtnContinuar()
        Checkout.preencherCheckout()
        Checkout.preencherSenha()
        Checkout.clicBtnCont()
        Checkout.validarDadosPessoais()
    })
    
})

describe('Testes negativos na rota na rota checkout', () => {
    beforeEach(() => {
        Login.acessarMercado()
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })

    it('Deve preencher checkout com email inválido e verificar mensagem de erro', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto3()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        Checkout.clicarBtnContinuar()
        Checkout.preencherEmailInvalido()
        Checkout.validarMsgDeError()
    })
})