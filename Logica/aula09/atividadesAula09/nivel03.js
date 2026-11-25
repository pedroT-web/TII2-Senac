// Você precisa criar uma tela HTML simples com um campo de texto e um botão para cadastrar nomes em um array.
// Crie uma função fnSalvarNome() que pegue o valor digitado, insira no array de nomes e exiba na tela o conteúdo
// atual do array junto com a quantidade de itens.
var nomes = []
function fnCadNome() {
    let nome = document.getElementById("inputNome").value
    if (nome == "") {
        alert("O nome não pode ser vazio!")

        return
    }

    nomes.push(nome)


    console.log(nomes)

    document.getElementById("listaNomes").innerHTML += `<li>${nome}</li>`
    document.getElementById("inputNome").value = ""
    document.getElementById("qtdNomes").innerHTML = `${nomes.length}`
}

// Para acompanhar tarefas do dia, crie uma tela HTML simples com um campo de entrada e um botão de adicionar 
// ligado a um array de tarefas. Crie uma função fnAtualizarListaTarefas() que adicione a tarefa no array e redesenhe na 
// tela uma lista com todos os elementos armazenados no array. 
var tarefas = []
function fnCadTarefa() {
    let tarefa = document.getElementById("inputTarefa").value
    if (tarefa == "") {
        alert("A tarefa não pode ser vazia!")

        return
    }

    tarefas.push(tarefa)

    console.log(tarefas)



    document.getElementById("containerCards").innerHTML += `<div class="card" style="max-width: 320px;">
                                                            <div class="card-body">
                                                                <h4 class="card-title">Tarefa ${tarefas.length}</h4>
                                                                <p class="card-text">${tarefa}</p>
                                                            </div>
                                                        </div>`
    document.getElementById("inputTarefa").value = ""
}

// Em um balcão de atendimento, crie uma tela HTML simples com um campo para o nome do cliente e dois botões: 
// um para entrar na fila e outro para chamar o próximo. Crie funções iniciadas com fn (fnEntrarFila e fnChamarFila) 
// que manipulem o array da fila e mostrem na tela quem está esperando e quem foi atendido. 
let fila = []
let atendidos = []

function fnEntrarFila() {
    let nomeCliente = document.getElementById("inputNomeCliente").value
    if (nomeCliente == "") {
        alert("A tarefa não pode ser vazia!")

        return
    }

    fila.push(nomeCliente)

    console.log(fila)



    document.getElementById("containerClientesFila").innerHTML += `<div class="card card-body col-3">${nomeCliente}</div>`
    document.getElementById("inputNomeCliente").value = ""
}

function fnChamarFila() {
    let cliente = fila.shift()

    atendidos.push(cliente)

    console.log(atendidos)



    document.getElementById("containerClientesAtendidos").innerHTML += `<div class="card card-body col-3">${cliente}</div>`
}

