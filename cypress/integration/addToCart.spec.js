import Login from '../pages/login.page'
import AddToCart from '../pages/addToCart.page'

describe('Testes na rota adicionar produtos ao carrinho', () => {
    beforeEach(() => {
        Login.acessarMercado()
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })
    
    it('Deve validar a url para estar na página home', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.validarUrl()
    })

    it('Deve adicionar produtos ao carrinho no modal e validar a quantidade e a descrição do produto', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto()
        AddToCart.validandoQtd()
        AddToCart.clicarBtnCarrinho()
        AddToCart.validandoSeOsComponentesEstaoVisiveis()
    })

    it('Deve adicionar produtos ao carrinho pela página e validar', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto2()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        AddToCart.validarItemNoCarrinho()
    })
})