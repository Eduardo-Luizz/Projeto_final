
import Login from '../pages/login.page'

describe('Testes na rota login', () => {
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

    it('Deve logar com usuário válido', () => {
        Login.acessarRotaLogin()
        Login.clicaBtnLogar()
        Login.logar()
    })
})

 