// Funções
function ola() {
    console.log("Seja bem vindo a sala de aula!")
}

ola()

function fnValidarIdade() {
    var idade = document.getElementById("idadeUsuario").value

    console.log(`A idade do usuário é: ${idade}`)

    if (idade >= 18) {
        alert("Você pode dirigir!!!")
    } else {
        alert("Você não pode dirigir!!!")
    }
}   