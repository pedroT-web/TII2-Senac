// Crie uma função que receba o nome de um aluno e suas três notas, calcule
// a média e informe se ele está aprovado (média maior ou igual a 7) ou
// reprovado. A mensagem deverá ser personalizada com o nome do aluno. 
function fnCalcularMedia(nome = "", nota1 = 0, nota2 = 0, nota3 = 0) {
    let media = 0

    media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        console.log(`O ${nome} está APROVADO!!`);
    } else {
        console.log(`O ${nome} está REPROVADO!!`);

    }
}
fnCalcularMedia("Pedro", 7, 3, 5)

// Crie uma função que receba dois números e exiba a diferença entre eles.
function fnDiferenca(num1, num2) {
    let diferenca = 0

    if (num1 >= num2) {
        diferenca = num1 - num2
    } else {
        diferenca = num2 - num1
    }


    console.log(`A diferenca entre ${num1} e ${num2} é ${diferenca}`)
}
fnDiferenca(6, 6)

//  Crie uma função que receba um número e exiba sua tabuada de
// multiplicação, utilizando um laço de repetição, do 1 ao 10.
function fnTabuada(number) {
    let i = 1
    let tabuada = 0

    while (i <= 10) {
        tabuada = number * i

        console.log(`${i} X ${number} = ${tabuada}`)
        i++
    }
}
fnTabuada(5)

// Crie uma função que receba a idade de uma pessoa e classifique sua faixa 
// etária de acordo com as seguintes regras: menor que 12 anos: criança; de 
// 12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: 
// idoso. Ao final, exiba a classificação correspondente. 
function fnFaixaEtaria(idade) {
    if (idade < 12) {
        console.log("Você é uma criança");
    } else if (idade > 12 && idade <= 17) {
        console.log("Você é um adolescente");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Você é um adulto");
    } else {
        console.log("Você é um idoso");
    }
}
fnFaixaEtaria(18)

// Crie uma função que receba a largura e a altura de um retângulo, calcule sua 
// área e exiba o resultado. (Para calcular a área de um retângulo, utilize a 
// fórmula Área = base × altura), O resultado deve ser expresso em unidades de 
// área, como centímetros quadrados (cm²)
function fnAreaRetangulo(largura, altura) {
    let area = 0

    area = largura * altura

    console.log(`A área do retângulo é: ${area}cm²`);
}
fnAreaRetangulo(4, 10)

// Crie uma função que receba um número e realize uma contagem regressiva 
// até chegar a zero, utilizando um laço de repetição.
function fnContagemRegressiva(numero) {
    let i = 0

    while (i <= numero) {
        console.log(numero);

        numero--
    }
}
fnContagemRegressiva(10)

// Crie uma função que receba o salário de um funcionário e aplique um 
// aumento de acordo com as seguintes regras: salários menores que R$ 1.000 
// recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima 
// de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.
function fnAumentoSalarial(salario) {
    let novoSalario = 0

    if (salario < 1000) {
        novoSalario = salario * 1.2

        console.log(`O novo salário com o reajuste de 20% é: ${novoSalario}`);
    } else if (salario >= 1000 && salario <= 2000) {
        novoSalario = salario * 1.15

        console.log(`O novo salário com o reajuste de 15% é: ${novoSalario}`);
    } else {
        novoSalario = salario * 1.1

        console.log(`O novo salário com o reajuste de 10% é: ${novoSalario}`);
    }
}
fnAumentoSalarial(1500)

// Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao 
// final, exiba uma mensagem informando o resultado.
function fnParImpar(numero) {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR!!`);
    } else {
        console.log(`O número ${numero} é IMPAR!!`);
    }
}
fnParImpar(3)

// Crie uma função que receba uma temperatura em Celsius e converta para 
// Fahrenheit. A função também deverá receber uma informação opcional para 
// definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. 
// Caso essa informação não seja fornecida, deverá realizar a conversão 
// padrão de Celsius para Fahrenheit.
function fnConverterTemperatura(temperatura, ehConversaoInversa = false) {
    let novaTemperatura = 0

    if (ehConversaoInversa == true) {
        novaTemperatura = (temperatura * 9 / 5) + 32

        console.log(`${temperatura} graus celcius é igual a: ${novaTemperatura} Farenheits`)
    } else {
        novaTemperatura = (temperatura - 32) * 5 / 9

        console.log(`${temperatura} Farenheits é igual a: ${novaTemperatura} graus celcius`)
    }
}
fnConverterTemperatura(89.6, false)

// Crie uma função que receba três números representando os lados de 
// um triângulo e verifique se ele é equilátero, isósceles ou escaleno.
function fnTipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log("O triângulo é EQUILÁTERO");
    } else if (lado1 != lado2 && lado2 != lado3) {
        console.log("O triângulo é ESCALENO");
    } else {
        console.log("O triângulo é ISÓSCELES");
    }
}
fnTipoTriangulo(4, 4, 4)

// Crie uma função que receba um número inteiro positivo e calcule a 
// soma de todos os números de 1 até o número informado, utilizando um laço 
// de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 + 
// 3 + 4 + 5 e exibir 15.
function fnSomaNumeros(numero) {
    let soma = 0

    for (let i = 0; i <= numero; i++) {
        soma += i
    }

    console.log(`A soma de todos os números anteriores a ${numero} é: ${soma}`)
}
fnSomaNumeros(5)

// Crie uma função que receba o valor de um produto e o percentual de 
// desconto. O percentual de desconto deverá ser opcional, considerando 10% 
// caso não seja informado. Ao final, exiba o valor do desconto e o preço final 
// do produto. 
function fnDescontoProduto(valor, desconto = 10) {
    let valorDesconto = desconto / 100


    let valorFinal = (valor * valorDesconto) + valor

    console.log(`Você tem um desconto de ${desconto}% e o valor final do produto é: ${valorFinal}`)
}
fnDescontoProduto(100)

// Crie uma função que receba a altura, a idade e a informação se a 
// pessoa possui algum problema cardíaco. Para entrar no brinquedo, a pessoa 
// precisa ter altura maior ou igual a 1,50 m e idade maior ou igual a 12 anos. 
// Caso possua algum problema cardíaco, não poderá utilizar o brinquedo, 
// independentemente das demais condições.
function fnEntradaBrinquedo(altura, idade, temProblemaCardiaco) {
    if (altura >= 1.5 && idade >= 12) {
        if (temProblemaCardiaco == true) {
            console.log("Você não tem a permissão para entrar no brinquedo");
        } else {
            console.log("Pode entrar");

        }
    } else {
        console.log("Você não tem a permissão para entrar no brinquedo");
    }
}
fnEntradaBrinquedo(1.7, 11, false)

// Crie uma função que receba a distância percorrida por um veículo e a 
// quantidade de combustível consumida. A função deverá calcular e exibir o 
// consumo médio em quilômetros por litro. (a soma é Km/Litros) 
function fnDistanciaPercorrida(distancia, combustivelConsumido) {
    let consumoMedio = distancia / combustivelConsumido

    console.log(`O consumo médio é igual a: ${consumoMedio} Km/Litros `);
}
fnDistanciaPercorrida(100, 10)

// Crie uma função que receba um número e exiba todos os números
// pares entre 1 e o número informado, utilizando um laço de repetição.
function fnNumerosPares(numero) {
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
fnNumerosPares(10)

// Crie uma função que receba o valor total de uma conta de restaurante
// e a quantidade de pessoas que irão dividir o pagamento. A quantidade de
// pessoas deverá ser opcional, considerando 2 pessoas caso não seja
// informada. Ao final, exiba quanto cada pessoa deverá pagar.
function fnValorRestaurante(valorTotal, qtdPessoas = 2) {
    let pagamentoFinal = valorTotal / qtdPessoas

    console.log(`A conta final será de: R$${pagamentoFinal}/Pessoa`)
}
fnValorRestaurante(1000, 4)

// Crie uma função que receba uma nota de 0 a 10 e classifique o
// desempenho do aluno de acordo com as seguintes regras: nota maior ou
// igual a 9: excelente; nota maior ou igual a 7 e menor que 9: bom; nota maior
// ou igual a 5 e menor que 7: regular; nota menor que 5: insuficiente. Ao final,
// exiba a classificação correspondente.
function fnNotaAluno(nota) {
    if (nota >= 9) {
        console.log("Desempenho Excelente");
    } else if (nota >= 7 && nota < 9) {
        console.log("Desempenho Bom");
    } else if (nota >= 5 && nota < 7) {
        console.log("Desempenho Regular");
    } else {
        console.log("Desempenho Insuficiente");
    }
}
fnNotaAluno(8)

// Crie uma função que receba um número e exiba o seu quadrado.
function fnNumeroQuadrado(numero){
    let quadrado = numero * numero

    console.log(`${numero}² = ${quadrado}`);
}
fnNumeroQuadrado(2)