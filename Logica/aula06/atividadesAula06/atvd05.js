// O cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for 
// "estudante". Crie um programa que receba o dia e a condição de estudante 
// (true/false) e informe se ele tem direito ao desconto. 
var diaSemana = "quarta-feira"
var ehEstudante = false

if (diaSemana === "quarta-feira" && ehEstudante == true) {
    console.log("Você tem direito a desconto 👌")
} else {
    console.log("Infelizmente você não atende os requisitos para ganhar o desconto 😢");

}