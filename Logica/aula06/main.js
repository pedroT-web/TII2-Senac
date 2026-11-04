// var, let, const

console.log("\nVar - Pode ser utilizada em todo o escopo")
for (var cont = 0; cont <= 10; cont++) {
    console.log(cont)
}

console.log("\nLet - Utiliza apenas nesse escopo, depois ele é deletado")
for (let i = 0; i <= 10; i++) {
    console.log("Segundo for: " + i);
}


console.log("\nConst - Definida apenas uma vez, depois não pode ser alterada")

const NOME_COMPLETO = "Pedro Augusto"

console.log(NOME_COMPLETO)
let variaveis_temporais = 7
var variaveis_globais = 0

variaveis_temporais = 7


var idade = 18
var temCarteiraMotorista = sim

if (idade >= 18 && temCarteiraMotorista == "sim") {
    console.log("Você tem permissão para dirigir")
} else {
    console.log("Você não tem permissão para dirigir")
}

var temCarro = "sim"
var temMoto = "nao"

if (temCarro == "sim" || temMoto == "sim") {
    console.log("Você pode se locomover tranquilamente")
} else {
    console.log("Você vai ter que ir na pernada mesmo!")
}