// Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.
var temperature = 31
var typeTemperature = "C" // C - Celcius or F - Farenheit
var temperatureConverted = 0

if (typeTemperature == "C") {
    console.log("You chose Celcius!!")
    temperatureConverted = ((temperature * 1.8) + 32)

    console.log("The temperature converted to Farenheit is: " + temperatureConverted);
} else {
    console.log("You chose Farenheit!!")
    temperatureConverted = ((temperature - 32) * (5 / 9))
    console.log("The temperature converted to Celcius is: " + temperatureConverted);

}