// for -> Para
// declaração; condição; incremento;

// for(var contador = 1; contador)

for (var i = 1; i <= 15; i++) {
    console.log("contador: " + i)

}

console.log("=====================================================================================================================================================================================")

// Casos específicos
// Caso eu queira ignorar algum valor
for (var i = 1; i <= 15; i++) {
    if (i == 7) {
        continue
    }

    console.log("contador: " + i)
}
