
import Login from '../pages/login.page'

describe('Testes positivos na rota login', () => {
    beforeEach(() =>{
        Login.acessarMercado()
    })
    
    it('Deve acessar a  rota login e validar url', () => {
        Login.acessarRotaLogin()
        Login.validarUrl()
    })

    it('Deve validar componentes da rota login', () => {
        Login.acessarRotaLogin()
        Login.validarMensagens('Já sou cadastrado')
        Login.validarMensagens('Informe seu e-mail ou CPF/CNPJ para se autenticar.')
        Login.validarSeBtnLoginExiste()
    })

    it('Deve validar textos e componentes da janela preencher seu login', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.validarMensagens('Identifique-se')
        Login.validarCompAbaLogin()
    })

    it('Deve logar com usuário válido e validar os dados pessoais', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
        Login.validarDadosPessoais()
    })
})

describe('Testes negativos na rota login', () => {
    beforeEach(() =>{
        Login.acessarMercado()
    })

    it('Deve tentar logar com um cpf que não foi criado e validar a mensagem de erro', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logarInvalido()
        Login.validarMsgErroNoUser()
    })

    it('Deve tentar logar com senha inválida e validar mensagem de erro', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logarSenhaInvalida()
        Login.validarMsgErroSenha()
    })
})

 