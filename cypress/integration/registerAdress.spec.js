
    import Login from '../pages/login.page'
    import RegisterAdress from '../pages/registerAdress.page'

    describe('Testes a rota cadastro de endereço', () => {

        beforeEach(() => {
            Login.acessarMercado()
            Login.acessarRotaLogin()
        })

        it('Deve acessar a rota de cadastro de endereço e validar a URL', () => {
            Login.clicaBtnLogar()
            Login.logar()
            RegisterAdress.clicaBtnMeuEndereco()
            RegisterAdress.validarUrl()
        })

        it('Deve validar componentes na rota de meus endereços', () => {
            Login.clicaBtnLogar()
            Login.logar()
            RegisterAdress.clicaBtnMeuEndereco()
            RegisterAdress.validarTextos()
        })

        it('Deve preencher o formulário para endereço de entrega', () => {
            Login.clicaBtnLogar()
            Login.logar()
            RegisterAdress.clicaBtnMeuEndereco()
            
        })
    })