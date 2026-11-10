// Crie uma função que receba a idade de uma pessoa e uma variável booleana 
// temCarteira. A função deve retornar true apenas se a idade for maior ou igual a 18 
// e temCarteira for true. 
function fnIdade(idade, temCarteira) {
    if (idade >= 18 && temCarteira == true) {
        return console.log(true)
    }else{
        return console.log(false)
    }
}

fnIdade(18, false)