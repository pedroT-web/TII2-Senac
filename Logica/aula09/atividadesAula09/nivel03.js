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

    fnAtualizarLista()

    console.log(fila)



    document.getElementById("inputNomeCliente").value = ""
}

function fnAtualizarLista() {
    document.getElementById("containerClientesFila").innerHTML = ""
    fila.forEach((nome) => {
        document.getElementById("containerClientesFila").innerHTML += `<div class="card card-body col-3">${nome}</div>`
    })
}

function fnChamarFila() {
    let cliente = fila.shift()

    atendidos.push(cliente)

    console.log(atendidos)

    fnAtualizarLista()
    document.getElementById("containerClientesAtendidos").innerHTML += `<div class="card card-body col-3">${cliente}</div>`
}

// Para simular o desfazer de anotações, crie uma tela HTML simples com um campo de texto e dois botões: um para 
// registrar e outro para desfazer o último. Crie funções fnRegistrarAcao e fnDesfazerUltima que alterem o array de 
// histórico e atualizem a visualização do array na página.
let historico = []

function fnRegistrarAcao() {
    let acao = document.getElementById("inputTarefa").value

    if (acao == "") {
        alert("A ação não pode ser vazia!")

        return
    }

    historico.push(acao)

    fnAtualizarAcoes(historico, "containerTarefas")
}

function fnAtualizarCampos(lista, campo) {
    document.getElementById(campo).innerHTML = ""
    lista.forEach((objeto) => {
        document.getElementById(campo).innerHTML += `<div class="card card-body col-3">${objeto}</div>`
    })
}

function fnDesfazerUltima() {
    historico.pop()

    fnAtualizarAcoes(historico, "containerTarefas")
}

// Em um somador simples de gastos, crie uma tela HTML com um campo numérico e um botão para incluir o valor 
// em um array de números. Crie funções fnAdicionarValor e fnCalcularSomaArray que guardem os números no array, 
// somem os elementos e exibam na tela os valores do array e o total. 
let numeros = []
function fnAdicionarValor() {
    let numero = document.getElementById("inputNumber").value

    if (numero == "" || numero == "e") {
        alert("A ação não pode ser realizada")

        return
    }

    numeros.push(numero)

    fnAtualizarCampos(numeros, "containerNumeros")
    console.log(numeros);

    fnCalcularSomaArray()
}

// function fnCalcularSomaArray() {
//     let soma = 0

//     numeros.forEach((numero) => {
//         soma += Number(numero)
//     })

//     document.getElementById("soma").innerHTML = soma.toString();
// }
// fnCalcularSomaArray()

// A partir de um array fixo de cursos ou tecnologias já definido no script, crie uma tela HTML simples com um campo 
// de busca e um botão para consultar. Crie uma função fnVerificarNoArray que procure o termo digitado dentro do 
// array e mostre na tela se ele existe ou não na lista. 
function fnVerificarNoArray() {
    var cursosETecnologias = ["Curso Java", "Curso Python", "Desenvolvimento Web"]

    console.log(cursosETecnologias);

    let busca = document.getElementById("inputBuscar").value
    let campoMensagem = document.getElementById("mensagem")

    if (busca == "") {
        alert("A busca não pode estar vazia")

        return
    }

    let temNoArray = cursosETecnologias.indexOf(busca)

    if (temNoArray == -1) {
        campoMensagem.innerHTML = "O termo digitado não existe na lista!"
    } else {
        campoMensagem.innerHTML = "O termo digitado existe na lista!"
    }
}

// Com um array pré-definido de cidades na memória, crie uma tela HTML simples com um campo de texto e um 
// botão para localizar a posição. Crie uma função fnBuscarIndiceCidade que verifique o índice do item no array e 
// exiba na tela a posição encontrada ou uma mensagem informando que não foi localizado.

function fnBuscarIndiceCidade() {
    let cidades = ["Sumaré", "Americana", "Campinas", "Ribeirão Preto"]
    let cidade = document.getElementById("inputProcurar").value
    let campoIndice = document.getElementById("indice")

    if (cidade == "") {
        alert("A busca não pode estar vazia")

        return
    }

    let temNoArrayCidades = cidades.indexOf(cidade)
    console.log(temNoArrayCidades);


    if (temNoArrayCidades == -1) {
        campoIndice.innerHTML = "Cidade Não Localizada"
    } else {
        campoIndice.innerHTML = `${cidade} está na ${temNoArrayCidades + 1}° posição`
    }
}

// Usando um array fixo de notas ou idades, crie uma tela HTML simples com um campo numérico para o valor 
// mínimo e um botão para filtrar. Crie uma função fnFiltrarArray que gere um novo array apenas com os valores 
// maiores ou iguais ao número informado e mostre esse array na tela.

function fnFiltrarArray() {
    var notas = [12, 18, 19, 10, 9, 16, 17]
    let valores_maiores = []
    let campoValores = document.getElementById("valores")

    campoValores.innerHTML = notas

    let filtro = document.getElementById("inputFiltragem").value

    if (filtro == "") {
        alert("Impossível filtrar com valores vazios")

        return
    }

    notas.forEach((nota) => {
        if (nota > filtro) {
            valores_maiores.push(nota)
        }
    })

    campoValores.innerHTML = `Valores maiores que ${filtro} :  ${valores_maiores}`
}

// Exibindo na tela os itens de um array de frutas, crie uma tela HTML simples com um campo de texto e um botão 
// para remover uma fruta específica. Crie uma função fnRemoverFrutaArray que encontre o item no array, remova-o e 
// atualize a exibição dos elementos restantes na página. 
   let frutas = ["Uva", "Morango", "Melão", "Abacaxi"]
    fnExibirFrutas(frutas)

function fnExibirFrutas(lista) {
    lista.forEach((fruta) => {
        document.getElementById("containerFrutas").innerHTML += `<div class="card card-body col-3">${fruta}</div>`
    })
}

function fnRemoverFrutaArray() {
    let item = document.getElementById("inputFruta").value

    console.log(item);
    
    console.log(frutas.includes(item));
    
    if (frutas.includes(item) == false) {
        alert("A fruta digitada não existe no array!")
    } else {
        frutas.splice(frutas.includes(item), 1)
    }

    fnExibirFrutas(frutas)
}