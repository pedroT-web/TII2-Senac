// [] -> Significa um array
// os valores são separados por vírgula (,)

console.log("===================================== Arrays =====================================")

let nomes = ["Isa", "Victor", "Pedro", "Samuel", "Geovana"]
console.log(nomes)
console.log(nomes[3]) // Consulta de posição (obs. a contagem do array começa em 0)

console.log("===================================== Substitui valores =====================================")

nomes[4] = "Caleb" // Subistitui o valor atual da posição 4 pelo valor fornecido

console.log(nomes)

console.log("===================================== Conta os valores =====================================")

console.log(nomes.length) // Conta quantas informações eu tenho no meu array

nomes[nomes.length] = "Geovana"

console.log(nomes);

console.log("===================================== Adicionar valores =====================================")

nomes.push("Nicolas") // push adiciona mais um valor ao FINAL do array
console.log(nomes)
nomes.unshift("Rosângela") // Adiciona mais um valor no começo do array
console.log(nomes)

console.log("===================================== Remover valores =====================================")


nomes.pop() // Remove o último valor
console.log(nomes);
nomes.shift() // Remove o primeiro valor
console.log(nomes);
// se eu quiser extrair as informação eu posso colocar dentro de uma variável.
let ultimoNome = nomes.pop()
console.log(nomes)
console.log(ultimoNome)

let primeiroNome = nomes.shift()
console.log(nomes)
console.log(primeiroNome)


// Atividades
// 1 Faça uma lista com o nome de 5 colegas
// 2 Adicione no final dessa lista o nome de +1 colega
// 3 Adicione no começo dessa lista o nome de um pet
// 4 Adicione agora no final da lista o nome de mais 2 a 5 colegas
// 5 Mostre a informação que esta salva na 4 posição
// 6 Extraia a primeira informação e salva na variavel PETs
let nomesAmigos = [
    "Victor",
    "Samuel",
    "João",
    "Caleb",
    "Paulo"
]
console.log(nomesAmigos);

nomesAmigos.push("Isa")
console.log(nomesAmigos);

nomesAmigos.unshift("Paçoca")
console.log(nomesAmigos)

nomesAmigos.push("Nicolas")
nomesAmigos.push("Hiago")
nomesAmigos.push("Gabriel")
console.log(nomesAmigos)

console.log(nomesAmigos[3])

let PETs = nomesAmigos.shift()
console.log(PETs);

console.log(nomesAmigos.includes("Nicolas")) // Retorna True or False - Verifica se existe esse valor dentro do array

console.log(nomesAmigos.indexOf("Samuel")) // Retorna o indice do valor dentro do array

// percorrer todo o array
// "=>" arrow function usado para definir uma função anônima
// () => {} declaração da função anonima
nomes.forEach((nome, i) => {
    console.log(`O ${i + 1}° registrado é: ${nome}`);
    if(nome == "Samuel"){
        console.log("Salveee!");
    }
})