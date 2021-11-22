
import RegisterUser from '../pages/registerUser.page'

describe('Testes positivos na rota cadastrar usuário', () => {

    beforeEach(() => {
        RegisterUser.acessarMercado()
        RegisterUser.acessarRotaCadastro()
    })

    it('Deve validar a Url', () => {
        RegisterUser.validarUrl('/cadastro')
    })

    it('Deve validar se os componentes da rota registrar usuário estão visíveis', () => {
        RegisterUser.validarComponentes()
    })

    it('Deve cadastrar um usuário e validar mensagens de sucesso e url', () => {
        RegisterUser.cadastrarUsuarioValido()
        RegisterUser.validarMsg()
        RegisterUser.validarRedirecionamento()
    })
})

describe('Testes negativos na rota cadastrar usuário', () => {

    beforeEach(() => {
        RegisterUser.acessarMercado()
        RegisterUser.acessarRotaCadastro()
    })

    it('Deve tentar cadastrar um usuário sem preencher nome e validar mensagem de erro', () => {
        RegisterUser.clicarBtnAvancar()
        RegisterUser.validarMsgErro(`Digite o seu nome completo, por favor.`)
    })

    it('Deve tentar cadastrar um usuário sem preencher cpf e validar mensagem de erro', () => {
        RegisterUser.preencherDadosAleatorios()
        RegisterUser.clicarBtnAvancar()
        RegisterUser.validarMsgErro(`Para prosseguir com o cadastro, por favor, informe um CPF`)
    })
})