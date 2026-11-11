// Objetivo: Retornar uma mensagem personalizada para o usuário
//  dentro dos parenteses () vai os parâmetros da função

function fnMensagem(nome) {
    console.log(`Seja bem vindo ${nome} ao sistema sandbox`);
}

// Objetivo: Receber 2 numeros e somar os valores
// Para passar mais de um parametro eu separo eles por vírgula.
// E SE eu quiser passar +1 parametro que valide o "tipo de operação (+, -, *, /)"
// se o usuário passar o valor de operador, faz a escolha dele, se ele não passar por padrão ele é executado a função SOMAR
function fnSoma(number1, number2, operador = "somar") {
    let result = 0

    if (operador == "somar") {
        result = number1 + number2
    } else if (operador == "subtrair") {
        result = number1 - number2
    } else if (operador == "multiplicar") {
        result = number1 * number2
    } else if (operador == "dividir") {
        result = number1 / number2
    } else {
        console.log("Operador Inválido, Selecione um dos seguintes operadores (somar, subtrair, multiplicar, dividir)")
    }


    console.log(`Ao ${operador} ${number1 + " e " + number2} O resultado é = ${result}`)
}