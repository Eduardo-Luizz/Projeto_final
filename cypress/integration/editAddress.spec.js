
    import Login from '../pages/login.page'
    import EditAddres from '../pages/editAddress.page'

    describe('Testes a rota cadastro de endereço', () => {

        beforeEach(() => {
            Login.acessarMercado()
            Login.acessarRotaLogin()
        })

        it('Deve acessar a rota de cadastro de endereço e validar a URL', () => {
            Login.clicaBtnLogar()
            Login.logar()
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.validarUrl()
        })

        it('Deve validar componentes na rota de meus endereços', () => {
            Login.clicaBtnLogar()
            Login.logar()
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.validarTextos()
        })

        it('Deve preencher o formulário para endereço de entrega e validar o cadastro', () => {
            Login.clicaBtnLogar()
            Login.logar()
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.clicarBtnEditarEnd()
            EditAddres.cadastrarEndereco()
            EditAddres.validandoEndereco()
        })
    })