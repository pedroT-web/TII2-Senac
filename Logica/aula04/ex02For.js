// Faça um laço que imprima o calculo da tabuada que foi escolhida pelo usuario

var chosenNumber = 10
var resultado = 0

for (var i = 1; i <= 10; i++) {
    resultado = i * chosenNumber

    console.log(i + " X " + chosenNumber + " = " + resultado)
}