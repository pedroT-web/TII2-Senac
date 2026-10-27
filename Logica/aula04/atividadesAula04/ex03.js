// Imprima todos os números IMPARES de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).

var i = 1

console.log("\nWhile\n")
while (i <= 50) {
    if (i % 2 != 0) {
        console.log(i)
    }

    i++
}

console.log("\nDo While\n")
i = 1
do {
    if (i % 2 != 0) {
        console.log(i)
    }

    i++
} while (i <= 50);

console.log("\nFOR\n")
for (i = 0; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }

}