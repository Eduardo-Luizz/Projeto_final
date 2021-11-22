
    import Login from '../pages/login.page'
    import EditAddres from '../pages/editAddress.page'

    describe('Testes positivos na rota cadastro de endereço', () => {

        beforeEach(() => {
            Login.acessarMercado()
            Login.acessarRotaLogin()
            Login.clicaBtnLogar()
            Login.logar()
        })

        it('Deve acessar a rota de cadastro de endereço e validar a URL', () => {
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.validarUrl()
        })

        it('Deve validar componentes na rota de meus endereços', () => {
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.validarTextos()
        })

        it('Deve preencher o formulário para endereço de entrega e validar o cadastro', () => {
            EditAddres.clicaBtnMeuEndereco()
            EditAddres.clicarBtnEditarEnd()
            EditAddres.cadastrarEndereco()
            EditAddres.clicarBtnSalvar()
            EditAddres.validandoEndereco()
        })
    })

describe('Testes negativos na rota cadastro de endereço', () => {
    beforeEach(() => {
        Login.acessarMercado()
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })

    it('Deve acessar a rota meus endereços sem preencher o formulário validar se o botão de salvar está desabilitado', () => {
        EditAddres.clicaBtnMeuEndereco()
        EditAddres.clicarBtnEditarEnd()
        EditAddres.validarSeBotaoEstaDesbilitado()
    })

    it('Deve acessar a rota meus endereços preencher o endereço e validar as mensagens de erro', () => {
        EditAddres.clicaBtnMeuEndereco()
        EditAddres.clicarBtnEditarEnd()
        EditAddres.preencherEnderecoEComplemento()
        EditAddres.clicarBtnSalvar()
        EditAddres.validarMsgErro()
    })
})