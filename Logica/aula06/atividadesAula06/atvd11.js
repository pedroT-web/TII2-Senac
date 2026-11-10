// Crie um programa que receba a temperatura atual e uma informação se está 
// chovendo ou não (true ou false). Se a temperatura for menor que 15 graus ou se 
// estiver chovendo, o programa deve exibir a mensagem "Leve um casaco". Caso 
// contrário, deve exibir "Vestuário livre".
var temperaturaAtual = 16
var estaChovendo = false

if (temperaturaAtual < 15 || estaChovendo == true) {
    console.log("Leve um casaco");
} else {
    console.log("Vestuário livre");
}