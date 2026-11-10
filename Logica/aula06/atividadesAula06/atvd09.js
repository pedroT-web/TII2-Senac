// Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual 
// a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver 
// problemaCardiaco igual a true, ela não pode andar de jeito nenhum. 
var altura = 1.5
var idade = 10
var problemaCardiaco = true

if (altura >= 1.5 && idade >= 12) {
    if (problemaCardiaco == true) {
        console.log("Não pode andar de jeito nenhum");
    } else {
        console.log("Você tem a permissão para andar");

    }
} else {
    console.log("Você não tem a permissão para andar");
}