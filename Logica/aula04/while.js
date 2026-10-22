// Repetir meu nome 10 vezes

// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")
// console.log("Pedro Augusto")

// While -> laço de repetição {enquanto}
var contador = 1

// Opção 1
while (contador <= 3) {
    console.log("Contador: " + contador)

    contador = contador + 1
}

console.log("=====================================================================================================================================================================================")

// Opção 2
contador = 1
while (true) {
    console.log("Contador: " + contador)

    if (contador == 3) {
        break
    }

    contador = contador + 1
}