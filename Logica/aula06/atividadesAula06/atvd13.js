// Uma loja funciona apenas de segunda a sexta-feira, no horário das 8h às 18h. Crie 
// um programa que receba o dia da semana e a hora atual (número inteiro) e informe 
// se a loja está aberta ou fechada. 
var diaSemana = "terça-feira"
var hora = 2

switch (diaSemana) {
    case "segunda-feira":
    case "terça-feira":
    case "quarta-feira":
    case "quinta-feira":
    case "sexta-feira":
        if (hora >= 8 && hora <= 18) {
            console.log("Loja Aberta!!");
        } else {
            console.log("Loja Fechada!!");
        }
        break

    default:
        console.log("Loja Fechada!!")
}
