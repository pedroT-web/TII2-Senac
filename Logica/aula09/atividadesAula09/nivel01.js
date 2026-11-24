// Você está organizando a chamada de uma turma com os alunos ["Ana", "Bruno", "Carla", "Diego", "Elena"] para 
// conferir quem abre e quem fecha a lista. Crie uma função fnExibirChamada() que declare esse array e exiba no 
// terminal o primeiro aluno, o último aluno usando .length e o total de estudantes cadastrados.
let chamada = [
    "Ana",
    "Bruno",
    "Carla",
    "Diego",
    "Elena"
]

function fnExibirChamada(listaChamada) {
    let qtdAlunos = listaChamada.length
    let primeiroAluno = listaChamada[qtdAlunos - 1]
    let ultimoAluno = listaChamada[0]

    console.log(`Quantidade de alunos: ${qtdAlunos}`);
    console.log(`Primeiro aluno: ${primeiroAluno}`);
    console.log(`Ultimo aluno: ${ultimoAluno}`);
}

fnExibirChamada(chamada)

// Durante o fechamento de um pedido online, o array ["Teclado Mecânico", "Mouse Gamer"] já contém dois itens e o 
// cliente resolveu incluir "Headset USB". Crie uma função fnAdicionarProduto(lista, novoItem) que adicione o novo 
// item ao final do array e mostre a lista atualizada no terminal.
let arrayProdutos = ["Teclado Mecânico", "Mouse Gamer"]

function fnAdicionarProduto(lista, novoItem) {
    lista.push(novoItem)

    console.log(lista);
}

fnAdicionarProduto(arrayProdutos, "Headset USB")

// Na recepção de um posto de saúde, a fila normal está com ["Marcos", "Juliana", "Roberto"] e chega "Dona Clara 
// (Idosa)" com atendimento prioritário. Crie uma função fnEncaixarPrioridade(fila, nomePaciente) que coloque a 
// paciente prioritária na frente da fila e exiba a nova sequência.
let filaEspera = ["Marcos", "Juliana", "Roberto"]

function fnEncaixarPrioridade(fila, nomePaciente) {
    filaEspera = fila.unshift(nomePaciente)

    console.log(fila);
    return fila
}
fnEncaixarPrioridade(filaEspera, "Dona Clara (Idosa)")

// A partir da fila ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"], o consultório vai iniciar o atendimento da 
// manhã. Crie uma função fnChamarProximo(fila) que retire o primeiro nome da fila e exiba no terminal quem foi 
// chamado e quem continua aguardando.
// function fnChamarProximo(filaNova){
//     let primeiroNomeFila = filaNova.shift()

//     console.log(`O primeiro a ser chamado(a) é ${primeiroNomeFila}`);
//     console.log(`${filaNova} Podem aguardar para serem chamados`);     
// }
// fnChamarProximo(filaEspera)