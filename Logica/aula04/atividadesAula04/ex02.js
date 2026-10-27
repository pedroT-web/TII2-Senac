// Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição (USANDO O WHILE E FOR).

console.log("\nWhile\n")

var i = 1
var soma = 0

while (i <= 100) {
    soma += i

    i++
}
console.log("A soma dos números de 1 a 100 é: " + soma)

console.log("\nFOR\n")

soma = 0

for (var i = 1; i <= 100; i++) {
    soma += i
}
console.log("A soma dos números de 1 a 100 é: " + soma)

