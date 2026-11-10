// Um shopping possui vagas reservadas.O motorista tem direito a estacionar nessa
// vaga se tiver 60 anos ou mais ou se possuir a credencial PNE(Pessoa com
// Necessidade Especial).No entanto, existe uma regra geral do local: nenhum tipo
// de caminhão pode estacionar nessas vagas, independentemente da condição do
// motorista.Crie um programa que receba a idade do motorista, se ele possui a
// credencial(true / false) e o tipo de veículo, informando se a parada na vaga é
// permitida. 

var idade = 60
var temCarteiraPne = false
var tipoVeiculo = "caminhão"

if (idade >= 60 || temCarteiraPne == true) {
    if (tipoVeiculo == "Caminhão" || tipoVeiculo == "caminhão") {
        console.log("Não é permitido estacionar nessa vaga")
    } else {
        console.log("Estacionar nesta vaga está permitido!");
    }
} else {
    console.log("Não é permitido estacionar nessa vaga")
}