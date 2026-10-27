// Números perfeitos até 1000: imprima todos os números perfeitos de 1 a 1000 utilizando um laço de repetição.
for (var i = 1; i <= 1000; i++) {
    var soma = 0

    for (var divisor = 1; divisor < i; divisor++) {
        if (i % divisor == 0) {
            soma += divisor
        }
    }

    if (soma === i) {
        console.log(i)
    }
}