const senha = 10

function fnExemplo() {
    console.log("Oi eu sou uma function");

    if (senha == 20) {
        console.log("Pode passar!!!");
    } else {
        console.log("Você não tem acesso!");

    }
}

function fnExemplo2() {
    let contador = 1

    while (contador <= 3) {
        console.log("Contagem: " + contador);

        contador++
    }
}

var testeValor = 5
let testeValorLet = 10


// .......
// .......
// .......
// .......
// .......
// .......
// .......
// .......
// .......

var testeValor = 10
testeValorLet = 20

function fnCalculoImportante() {
    console.log("Aqui eu tenho um cálculo importante!!");

    let valorImportante = 10

    console.log("Valor Importante: " + valorImportante);
}

function fnCalculoImportanteUrgente() {
    console.log("Aqui eu tenho um cálculo importante!!");

    let valorImportante = 90
    let resultado

    if (valorImportante == 90) {
        resultado = "Deu certo!!"
    }

    console.log(resultado);


    console.log("Valor Importante: " + valorImportante);
}
