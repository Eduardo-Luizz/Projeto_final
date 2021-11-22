import Login from '../pages/login.page'
import AddToCart from '../pages/addToCart.page'
import Checkout from '../pages/checkout.page'

describe('Testes na rota checkout', () => {
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

    it.only('Deve preencher checkout', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto3()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        Checkout.clicarBtnContinuar()
        Checkout.preencherCheckout()
        Checkout.preencherSenha()
        Checkout.clicBtnCont()
        Checkout.preencherCep()
        Checkout.clicarBtnPreencherCep()
        Checkout.preencherNumero()
        Checkout.clicarBtnSalvarDados()
    })
    
})