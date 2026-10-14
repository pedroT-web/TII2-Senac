// string = text
// boolean = true / false
// float = number with a decimal point
// int = integer

// Variables

var ageUser = 19

// Display Mensage in on screen
// The symbol "+" When used with text, its function is to "concatenate."
console.log("User age: " + ageUser)

// "=" is the operator of attribuition
// "==" is the operator of comparation
// ">" operator Bigger
// "<" operator Minor
// ">=" operator Bigger or Equal
// "<=" operator Minor or Equal
console.log(ageUser = 17)
console.log(ageUser == 17)
console.log(ageUser > 17)
console.log(ageUser < 17)
console.log(ageUser >= 17)
console.log(ageUser <= 17)
// After performing the comparison, the result is a boolean value.

// If -> if(question) and executes if is true
// Else -> else executes case the if is false
if(ageUser >= 18){
    console.log("The user can driver")
}else{
    console.log("I'm Sorry, but you can't driver yet")
}



console.log("===============================================================================================================================================================================================")

// Validation of whether the value is negative, zero or positive.

var numberUser = 10

if (numberUser >= 0) {
    if (numberUser == 0) {
        console.log("The number is ZERO!!!")

    } else {
        console.log("The number is POSITIVE!!!")
    }
}
else {
    console.log("The number is NEGATIVE!!!")
}



console.log("===============================================================================================================================================================================================")

// Write a program that converts from temperature of Celcius to Fahrenheit
// and vice-versa
// F = (°C x 1.8) + 32
// C = (°F - 32) x 5/9

var temperature = 40
var typeTemperature = "F" // C - Celcius or F - Farenheit
var temperatureConverted = 0

if (typeTemperature == "C"){
    console.log("You chose Celcius!!")
    temperatureConverted = ((temperature * 1.8) + 32)

    console.log("The temperature converted to Farenheit is: " + temperatureConverted);
}else{
    console.log("You chose Farenheit!!")
    temperatureConverted = ((temperature - 32) * (5/9))
    console.log("The temperature converted to Celcius is: " + temperatureConverted);

}



console.log("===============================================================================================================================================================================================")