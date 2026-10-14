// 2.Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 
// recebem 15%, e acima de R$2000 recebem 10%.

var salaryEmployee = 2001
var newSalaryEmployee = 0

if (salaryEmployee < 1000) {
    newSalaryEmployee = (salaryEmployee * 0.2) + salaryEmployee

    console.log("Você recebeu um aumento de 20%, seu novo salário é: " + newSalaryEmployee)
}
if (salaryEmployee > 2000) {
    newSalaryEmployee = (salaryEmployee * 0.1) + salaryEmployee

    console.log("Você recebeu um aumento de 10%, seu novo salário é: " + newSalaryEmployee)

} if (salaryEmployee > 1000) {
    if (salaryEmployee < 2000) {
        newSalaryEmployee = (salaryEmployee * 0.15) + salaryEmployee

        console.log("Você recebeu um aumento de 15%, seu novo salário é: " + newSalaryEmployee)
    }
}
