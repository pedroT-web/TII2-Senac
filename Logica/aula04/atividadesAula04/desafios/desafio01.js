// Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.
var fn = 0
var n1 = 0
var n2 = 1
console.log("Sequência dos 10 primerios números de fibonacci")

for (var i = 1; i <= 10; i++) {
    console.log(n1)

    fn += n1 + n2
    n1 = n2
    n2 = fn
}