
Cypress.Commands.add('geradorDeFixture', () => {
    
    const faker = require('faker');
    const { fakerBr } = require('js-brasil');

    cy.writeFile('cypress/fixtures/user.json', {
        'nomeCompleto' : `${faker.name.firstName()} ${faker.name.lastName()}`,
        'dataNasc'     :  fakerBr.data({idadeMin: 18, idadeMax: 40}),
        'cpf'          :  fakerBr.cpf() ,
        'telCel'       :  `${5499}${faker.datatype.number({min: 1000001, max: 9999999})}`,
        'email'        : `${faker.internet.email()}`,
        'senha'        : `${faker.internet.password()}`,
    })
})