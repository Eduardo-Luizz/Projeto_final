export const REGISTER_USER = {
    BTN_CADASTRO : '[data-tray-tst=cadastro]',
    IMG          : '.site-logo',
    INP_NAME     : '#pf_nome_cliente',
    INP_DATANASC : '#pf_data_nascimento',
    INP_CPF      : '#pf_cpf_cliente',
    INP_TELFIXO  : '#telefone_cliente',
    INP_TELCEL   : '#telefone_cliente_2',
    INP_EMAIL    : '#email_cliente',
    INP_EMAIL2   : '#email_cliente2',
    INP_SENHA    : '#senha_cliente',
    INP_SENHA2   : '#senha_cliente2',
    BTN_AVANCAR  : '.botao-commerce-img',

    TXT_NOME     : '*Nome Completo:',
    TXT_DATA     : 'Data Nascimento:',
    TXT_CPF      : 'CPF:',
    TXT_FIX      : 'Telefone Fixo ou Comercial:',
    TXT_CELL     : 'Telefone Celular:',
    TXT_EMAIL    : 'E-mail:',
    TXT_EMAIL2   : '*Digite novamente:',
    TXT_SENHA    : '*Crie sua',
    TXT_SENHA2   : '*Digite novamente:',

    TXT_TIT      : ' .color'
}

export const LOGIN = {
    BTN_ENTRAR      : '[data-tray-tst=login]',

    TXT_BEMVINDO    : '.caixa-login',
    BTN_LOGIN       : '.botao-efetuar-login',

    BTN_SAIRLOGIN   : '.tray-close',
    INP_EMAIL       : '#input-email',
    INP_PASSWORD    : '#input-password',
    BTN_PASS_SUBMIT : '#password-submit',
    BTN_CONTINUAR   : '#tray-login-identify',
    BTN_FACEBOOK    : '.tray-btn-facebook',

    TXT_USER        : '.app__customer-greetings__greeting-item'
}

export const REGISTER_ADRESS = {
    TXT_NAME            : '.app__address-list__item__text__customer-name',
    TXT_PRINCIPAL       : '.app__badge',

    BTN_EDITAR          : '.app__button--no-margin',
    INP_END             : '#address-description',
    INP_CEP             : '#address-cep',
    INP_NUM 	        : '#address-number',
    INP_COMP            : '#address-complement', 
    
    MSG_SUCESSO         : '.alert-success'
}

export const ADD_TO_CART = {
    BTN_ACESSAR_LOJA : '.app__link--featured',
    BTN_ADC_1        : '[data-app*=buy-button]:visible',
    BTN_ADC_ARROZ    : '#qtd27:visible',

    BTN_CARRINHO     : '[data-tray-tst="link_qtde_carrinho"]',
    TXT_ARROZ        : '.product-title-name',
    EXC_PRODUTO      : '.prod-delete',

    TXT_VALOR        : '.subtotal-price',

    BTN_ADC          : '[data-action=plus]:visible',
    BTN_CAR_QTD      : '.form-control',

    TXT_PRICE        : '.ch-cart-product-price',
    TXT_VALUE        : '.ch-cart-product-price-unit',

    BTN_LIMPAR_CARRINHO: '.btn-clear',
    BTN_FECHAR       : '.btn-close-cart',

    IMG_QUANTIDADE   : '[data-tray-tst=carrinho_qtde]:visible',
    IMG_PRECO        : '.cart-value'
}

export const CHECKOUT = {

    INP_USER         : '#login-email',
    BTN_CONTINUAR    : '#login-action',
    QLQ              : '[class*=secret-answer]',
    INP_SENHA        : '#input-password',

    BTN_CONTINUAR2    : '#password-submit',

    INP_CEP           : '#customer-address-zipcode',
    BTN_CEP           : '#btnFindAddress',
    INP_NUM2          : '#customer-address-number',
    BTN_SAVE          : '.btn-cart-form',
}