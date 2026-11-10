// Uma loja online oferece frete grátis se o valorCompra for maior que R$ 100 ou se o 
// cliente for membroVIP. No entanto, o frete grátis não se aplica se a entrega for para 
// zonaRural. Crie o programa que retorne se o cliente tem direito ao frete grátis. 
var valorCompra = 101
var membroVIP = false
var zonaRural = true

if (valorCompra > 100 && zonaRural == false || membroVIP == true && zonaRural == false) {
    console.log("Você tem direito a frete grátis");
} else {
    console.log("Você não tem direito a frete grátis")
}