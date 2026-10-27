// Inverter uma String: implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.

var string = "Pedro"
var stringInvertida = ""

for (var i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i]
}

console.log("O texto (" + string + ") invertido é: " + stringInvertida)