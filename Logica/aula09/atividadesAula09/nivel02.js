// Um caixa precisa somar os valores de uma compra com os itens 29.90, 54.00, 15.50 e 80.00 armazenados em um 
// array. Percorra os valores com repetição, acumule o total e exiba o valor final formatado no terminal.
let itens = [29.90, 54.00, 15.50, 80.00]

function fnCalcularCompra(lista) {
    let soma = 0

    lista.forEach((item) => {
        soma += item
    })

    console.log(`O valor final da compra é: R$ ${soma}`);
}

fnCalcularCompra(itens)

// A coordenação pedagógica quer saber a situação de um aluno a partir das quatro notas 6.5, 5.0, 7.5 e 6.0 guardadas 
// em um array. Calcule a média das notas e exiba no terminal se o aluno está aprovado (média a partir de 6.0) ou 
// reprovado.
let notas = [6.5, 5.0, 7.5, 6.0]

function fnCalcularMedia(lista) {
    let notaTotal = 0
    let media = 0

    lista.forEach((nota) => {
        notaTotal += nota
    })
    media = notaTotal / notas.length

    console.log(`A média final do aluno é: ${media}`)
}
fnCalcularMedia(notas)

// Em um levantamento de faixa etária com as idades 14, 18, 25, 16, 32, 17 e 19 dentro de um array, é necessário 
// separar apenas quem já atingiu a maioridade. Gere um novo array contendo somente as idades maiores ou iguais a 
// 18 e exiba o resultado no terminal. 
let idades = [14, 18, 25, 16, 32, 17, 19]

function fnSeparaIdades(lista) {
    let maioresIdade = []

    lista.forEach((idade) => {
        if (idade >= 18) {
            maioresIdade.push(idade)
        }
    })

    console.log(`Quem atingiu a maioridade: ${maioresIdade}`)
}

fnSeparaIdades(idades)

// Um sistema de cadastro recebe novos logins e já possui "joao.silva", "maria.souza" e "pedro.lima" em um array. 
// Verifique se um novo login já existe antes de inserir: se não existir, adicione ao array e confirme; se já existir, informe 
// que o login está indisponível. 
let logins = ["joao.silva", "maria.souza", "pedro.lima"]

function fnAddLogin(lista, login) {
    if (lista.includes(login) == true) {
        console.log(`O login: ${login} está indisponível`)
    } else {
        lista.push(login)
        console.log(`Login adicionado!`)
    }
}
fnAddLogin(logins, "Vitor.guedes")

// Uma loja decidiu aplicar 15% de desconto em todos os preços de um array com os valores 100, 200, 50 e 80. Calcule 
// o novo valor de cada item sem perder os valores originais e exiba o novo array com os preços promocionais. 
let precos = [100, 200, 50, 80]

function fnPrecosPromocionais(lista) {
    let promocoes = []
    lista.forEach((preco) => {
        promocoes.push(preco * 1.15)
    })

    console.log(`Preços Sem promoções: ${lista}`)
    console.log(`Preços Promocionais: ${promocoes}`)
}
fnPrecosPromocionais(precos)

// A partir de um array contendo os números 12, 7, 5, 20, 33, 8, 11 e 4, você precisa gerar um resumo numérico para o 
// relatório. Percorra o array, conte quantos números são pares e quantos são ímpares e exiba ambas as quantidades 
// no terminal.
let numeros = [12, 7, 5, 20, 33, 8, 11, 4]

function fnParesImpares(lista) {
    let pares = 0
    let impares = 0
    lista.forEach((numero) => {
        if (numero % 2 == 0) {
            pares += 1
        } else {
            impares += 1
        }
    })

    console.log(`Quantidade de números pares: ${pares}\nQuantidade de números Ímpares ${impares}`);
}
fnParesImpares(numeros)

// Durante o monitoramento de um dia, foram registradas as temperaturas 22, 29, 18, 31, 24 e 19 em um array. 
// Percorra os elementos com estrutura condicional para descobrir qual foi a maior e qual foi a menor temperatura 
// registrada e exiba no terminal. 
let temperaturas = [22, 29, 18, 31, 24, 19]

function fnMaiorTemperatura(lista) {
    let maiorTemperatura = 0
    lista.forEach((temperatura) => {
        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura
        }
    })

    console.log(`A maior temperatura registrada foi: ${maiorTemperatura}`);
}
fnMaiorTemperatura(temperaturas)

// Um cliente pediu para cancelar "Batata Frita" de um pedido que já tinha "Hambúrguer", "Batata Frita", "Refrigerante" 
// e "Sobremesa" em um array. Localize a posição desse item no array, remova-o da lista e exiba o pedido atualizado 
// no terminal.
let pedido = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"]

function fnRemoverItemPedido(lista, item) {
    let itemRemover = lista.indexOf(item)

    if (itemRemover == -1) {
        console.log(`O item ${item} não está em seu pedido`);
    } else {
        lista.splice(itemRemover, 1)

        console.log(`Item ${item} foi removido, pedido atual: ${lista}`);
    }
}
fnRemoverItemPedido(pedido, "Batata Frita")

// A partir de um array com os nomes "Amanda", "Carlos", "Arthur", "Bruna", "Alice" e "Diego", a secretaria quer listar 
// apenas quem começa com uma letra específica, como "A". Filtre os nomes pela inicial informada e exiba o resultado 
// no terminal.
let nomes = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"]

function fnFiltrarNomes(lista, inicial) {
    lista.forEach((nome) => {
        if (nome.charAt(0) == inicial) {
            console.log(nome)
        }
    })
}
fnFiltrarNomes(nomes, "A")

// Um controle de estoque guarda produtos com seus respectivos nomes e quantidades em estoque (Notebook com 
// 4, Webcam com 0, Mousepad com 12 e Cabo HDMI com 0). Percorra a coleção e exiba no terminal apenas os itens 
// que ainda possuem unidades disponíveis (quantidade maior que zero).
let produtos = ["Notebook", "WebCam", "Mousepad", "Cabo HDMI"]
let quantidades = [4, 0, 12, 0]

function fnUnidadesDisponiveis(lista, listaQtds) {
    lista.forEach((produto, i) => {
        if (listaQtds[i] > 0) {
            console.log(`O produto ${produto} tem ${listaQtds[i]} unidades disponíveis`);
        } else {
            console.log(`O produto ${produto} não tem unidades disponíveis`);
        }
    })
}
fnUnidadesDisponiveis(produtos, quantidades)