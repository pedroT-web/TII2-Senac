// Faça um laço que imprima o calculo da tabuada que foi escolhida pelo usuario
var chosenNumber = 10
var i = 1
var resultado = 0

while (i <= 10) {
    resultado = i * chosenNumber

    console.log(i + " X " + chosenNumber + "= " + resultado)

    i += 1
}