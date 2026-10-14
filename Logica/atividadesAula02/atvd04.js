// Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
var number1 = 10
var number2 = 5
var typeOperation = "divisao"
var calculation = 0

if (typeOperation == "adicao") {
    calculation = number1 + number2

    console.log(number1 + " + " + number2 + " = " + calculation)
}
if (typeOperation == "subtracao") {
    calculation = number1 - number2

    console.log(number1 + " - " + number2 + " = " + calculation)
}
if (typeOperation == "multiplicacao") {
    calculation = number1 * number2

    console.log(number1 + " X " + number2 + " = " + calculation)
}
if (typeOperation == "divisao") {
    calculation = number1 / number2

    console.log(number1 + " / " + number2 + " = " + calculation)
}