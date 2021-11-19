import Login from '../pages/login.page'
import AddToCart from '../pages/addToCart.page'

describe('Testes na rota adicionar produtos ao carrinho', () => {
    beforeEach(() => {
        Login.acessarMercado()
    })
    
    it('Deve validar se está na página home', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
        AddToCart.validarUrl()
        //AddToCart.clicarBtnLoja()
    })
})