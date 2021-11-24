import Login from '../pages/login.page'
import AddToCart from '../pages/addToCart.page'

describe('Testes positivos na rota adicionar produtos ao carrinho', () => {
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

describe('Testes negativos na rota adicionar produtos ao carrinho', () => {
    beforeEach(() => {
        Login.acessarMercado()
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })

    it('Deve adicionar produtos ao carrinho e logo após remover pelo modal validando se a quantidade e valor no carrinho estão nulos', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProdutoTesteNeg()
        AddToCart.clicarBtnCarrinho()
        AddToCart.clicarBtnLimparCarrinho()
        AddToCart.clicarBtnFecharCarrinho()
        AddToCart.validarQuantidadeEPreco()
    })

    it('Deve adicionar produtos ao carrinho e logo após remover pela página validando a mensagem de carrinho vazio e url', () => {
        AddToCart.clicarBtnLoja()
        AddToCart.clicarAdcProduto()
        AddToCart.clicarBtnCarrinho()
        AddToCart.finalizarPedido()
        AddToCart.removerProdutoCarrinho()
        AddToCart.validarMegCarrinhoVazio()
        AddToCart.validarUrlCarrinhoVazio()
    })
})