// Um site exige que, para enviar um cadastro, o campo de e-mail não esteja vazio 
// (diferente de "") e que o usuário tenha marcado a opção de aceitar os termos de 
// serviço (true). Crie uma função que receba o e-mail e a confirmação dos termos e 
// retorne se o formulário é válido para envio. 
function fnValidarFormulatio(email, aceitarTermos) {
    if (email != "" && aceitarTermos == true) {
        return console.log("Formulário Válido")
    } else {
        return console.log("Formulário Inválido");

    }
}

fnValidarFormulatio("pedro", false)