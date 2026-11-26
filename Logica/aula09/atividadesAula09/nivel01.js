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
    fila.unshift(nomePaciente)

    console.log(fila);
}
fnEncaixarPrioridade(filaEspera, "Dona Clara (Idosa)")

// A partir da fila ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"], o consultório vai iniciar o atendimento da 
// manhã. Crie uma função fnChamarProximo(fila) que retire o primeiro nome da fila e exiba no terminal quem foi 
// chamado e quem continua aguardando.
function fnChamarProximo(filaNova) {
    let primeiroNomeFila = filaNova.shift()

    console.log(`O primeiro a ser chamado(a) é ${primeiroNomeFila}`);
    console.log(`${filaNova} Podem aguardar para serem chamados`);
}
fnChamarProximo(filaEspera)

// Em um editor de texto simples, o usuário realizou as ações ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] e 
// quer desfazer o que fez por último. Crie uma função fnDesfazerAcao(lista) que remova o último elemento do array e 
// mostre no terminal as ações restantes. 
let acoes = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]

function fnDesfazerAcao(lista) {
    let ultimaAcao = lista.pop()

    console.log(`Acão desfeita: ${ultimaAcao}\n As ações restantes são: ${lista}`);
}

fnDesfazerAcao(acoes)

// O responsável pelo almoxarifado precisa conferir quantos itens existem no array ["Camiseta", "Calça", "Tênis", 
// "Boné"] antes de iniciar a contagem física. Crie uma função fnVerificarEstoque(lista) que exiba no terminal a 
// quantidade total de itens usando .length. 
let estoque = ["Camiseta", "Calça", "Tênis", "Boné"]

function fnVerificarEstoque(lista) {
    console.log(`A quantidade de itens em estoque é: ${lista.length}`);
}

fnVerificarEstoque(estoque)

// Na portaria de um evento, a lista oficial de convidados é ["Lucas", "Mariana", "Thiago", "Beatriz"] e duas pessoas 
// chegam perguntando se estão autorizadas: "Mariana" e "Rafael". Crie uma função fnEstaNaLista(lista, nome) que 
// verifique a presença de cada nome no array e exiba o resultado no terminal. 
let convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"]

function fnEstaNaLista(lista, nome) {
    if (lista.includes(nome) == true) {
        console.log(`${nome} está na lista, pode entrar!`)
    } else {
        console.log(`${nome} Não está na lista, não pode entrar!`);

    }
}

fnEstaNaLista(convidados, "Mariana")
fnEstaNaLista(convidados, "Rafael")

// Em um mercado, os corredores seguem a ordem ["Arroz", "Feijão", "Açúcar", "Café", "Sal"] e um repositor precisa 
// saber a posição exata de "Café" e conferir se "Macarrão" consta no array. Crie uma função fnConsultarCorredor(lista, 
// item) que retorne ou exiba a posição encontrada ou o aviso de que o item não está no array. 
let ordem = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

function fnConsultarCorredor(lista, item) {
    let posicao = lista.indexOf(item) + 1
    let tem_item = lista.includes(item)

    if (posicao == -1 || tem_item == false) {
        console.log(`Não tem o ${item} no array`)
    } else {
        console.log(`O ${item} se encontra na posição: ${posicao}`);
    }
}

fnConsultarCorredor(ordem, "Café")
fnConsultarCorredor(ordem, "Macarrão")

// A tabela de preços base de um lanche está armazenada em [15.00, 25.00, 40.00] e o segundo item sofreu reajuste 
// para 28.50. Crie uma função fnAtualizarPreco(lista, indice, novoValor) que altere o valor na posição informada e 
// exiba o array modificado no terminal.
let precos_base = [15.00, 25.00, 40.00]

function fnAtualizarPreco(lista, indice, novoValor) {
    if ((lista.length - 1) < indice) {
        console.log("Produto Não encontrado");

        return
    }

    lista[indice] = novoValor

    console.log(`Tabela de preços atualizada: ${lista}`);

}
fnAtualizarPreco(precos_base, 5, 28.5)

// Para montar o boletim inicial de um estudante com as notas 8.0, 7.5 e 9.0, você precisa agrupar esses valores em 
// uma única estrutura. Crie uma função fnCriarBoletim(nota1, nota2, nota3) que armazene as três notas em um array e 
// o exiba ou retorne para conferência.
function fnCriarBoletim(nota1, nota2, nota3) {
    let boletim = [nota1, nota2, nota3]

    console.log(`Notas: ${boletim}`)
}

fnCriarBoletim(8.0, 7.5, 9.0)