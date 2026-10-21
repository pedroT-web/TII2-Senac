// Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
var day = 29
var month = 2
var year = 2001

if (day >= 1) {
    if (month >= 1) {
        if (month <= 12) {
            if (year > 2026) {
                console.log("Ano Inválido, estamos em 2026")
            } else {
                if (day <= 31) {
                    if (month == 5) {
                        if (day > 30) {
                            console.log("Dia Inválido, Este mês vai apenas até o dia 30")
                        }
                    }
                    if (month == 6) {
                        if (day > 30) {
                            console.log("Dia Inválido, Este mês vai apenas até o dia 30")
                        }
                    }
                    if (month == 9) {
                        if (day > 30) {
                            console.log("Dia Inválido, Este mês vai apenas até o dia 30")
                        } 
                    }
                    if (month == 11) {
                        if (day > 30) {
                            console.log("Dia Inválido, Este mês vai apenas até o dia 30")
                        }
                    }
                    if (month == 2) {
                        if (day > 28) {
                            console.log("Dia Inválido, Este mês vai apenas até o dia 28")
                        } else {
                            console.log("Dia Válido")
                        }
                    }
                    if (day == 31) {
                        if (month != 2) {
                            if (month != 5) {
                                if (month != 6) {
                                    if (month != 9) {
                                        if (month != 11) {
                                            if (month != 2) {
                                                console.log("Dia Válido")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (month != 2) {
                            console.log("Dia Válido")
                        }
                    }

                } else {
                    console.log("Dia Inválido, o dia máximo é 31")

                }
            }
        }
        else {
            console.log("Mês Inválido, o mês vai de 1(Janeiro) a 12(Dezembro)")

        }

    } else {
        console.log("Mês Inválido, o mês vai de 1 (Janeiro) a 12 (Dezembro)")

    }

}