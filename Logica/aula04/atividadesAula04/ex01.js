// Imprima todos os números pares de 1 a 20 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).

var i = 1

console.log("\nWhile\n")

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }

    i += 1
}

var index = 1

console.log("\nDo While\n")

do {
    if (index % 2 == 0) {
        console.log(index);
    }

    index += 1
} while (index <= 20);

console.log("\nFOR\n")

for (var contador = 1; contador <= 20; contador++) {
    if (contador % 2 == 0) {
        console.log(contador);
    } else {
        continue
    }
}