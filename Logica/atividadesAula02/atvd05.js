// Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.
var studantsName = "Pedro"
var grade1 = 7
var grade2 = 7
var grade3 = 7.5
var calculationAverage = (grade1 + grade2 + grade3) / 3

if (calculationAverage >= 7) {
    console.log("A nota final do aluno é: " + calculationAverage + "\nEle está APROVADO!!!")
} else {
    console.log("A nota final do aluno é: " + calculationAverage + "\nEle está REPROVADO!!!")

}