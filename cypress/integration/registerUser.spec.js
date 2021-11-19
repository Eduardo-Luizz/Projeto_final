
import RegisterUser from '../pages/MercadoRegisterUser.page'

describe('Testes na rota cadastrar usuário', () => {

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

    it.only('Deve cadastrar um usuário', () => {
        RegisterUser.cadastrarUsuarioValido()
    })

})
