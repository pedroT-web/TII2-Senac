// Crie um programa que receba o usuário e a senha em variáveis. Exiba a mensagem 
// "Acesso permitido" apenas se o usuário for exatamente "admin" e a senha for 
// "1234". 

var user = "admin"
var password = "1234"

if (user === "admin" && password == "1234"){
    console.log("Acesso Permitido!!")
}else{
    console.log("Acesso Negado!!");
    
}