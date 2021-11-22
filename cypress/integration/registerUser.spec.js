
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

    
})