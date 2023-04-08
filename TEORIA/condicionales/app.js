// Crea una estructura "if" que contemple seis posibles colores que pueda escribir el usuario y una opción extra para decir si un color no es uno de los seis posibles.
// Esta estructura estará formada por un solo if else con sus necesarios else if. Los colores son "rojo, azul, amarillo, verde, rosa y negro.""
// El color a evaluar con el condicional se debe guardar en una variable con un "prompt()"". La evaluación se hará con este valor.
// Debes contemplar de cada color que se escriba todo en minúsculas o todo en mayúsculas o con la primera letra en Mayúscula. 
//Por ejemplo rojo, ROJO y Rojo. Así funcionará si se escribe de cualquiera de estas tres formas.

let color = "Negro"  // prompt("Elige y escribe uno delos siguietnes colores: rojo, azul, amarillo, verde, rosa y negro");

if (color === "Rojo") {
    console.log("Has elegido el color Rojo")
} else if (color === "Azul") {
    console.log("Has elegido el color Azul")
} else if (color === "Amarillo") {
    console.log("Has elegido el color Amarillo")
} else if (color === "Verde") {
    console.log("Has elegido el color Verde")
} else if (color === "Rosa") {
    console.log("Has elegido el color Rosa")
} else if (color === "Negro") {
    console.log("Has elegido el color Negro")
} else {
    console.log("Error, ese color no está entre los que puedes elegir")

}

// Ahora intenta escribir con un if else sin utilizar else if una estructura parecida a la del ejercicio anterior.
// Esta vez, será como un mini juego, se pedirá uno de los seis colores y el mismo if dirá si el color está en la lista o no. 
// No los tienes que indicar en el prompt(), el jugador debe acertar uno de los seis. Si no acierta, saltará el else diciendo que el color no está en la lista. 
// No hay que contemplar obligatoriamente el tema de mayúsculas y minúsculas del ejercicio anterior, en este ejercicio es libre.

let colour = "brillante"

if (colour == "Rojo" || colour == "Azul" || colour == "Amarillo" || colour == "Verde" || colour == "Rosa" || colour == "Negro") {
    console.log("Has elegido un clor de la lista, Felicidades !!!")
} else {
    console.log("Vaya !!!, el color elegido no está en la lista, sigue intentndolo, no te desanimes")
}

let edad = 160

if (edad < 18) {
    console.log("Eres menor de edad, no puedes entrar hasta que los cumplas")
} else if (edad >= 18 && edad < 65) {
    console.log("Feliciddes !!! Eres mayor de edad y puedes pasar.")
} else if (edad >= 65 && edad <= 124) {
    console.log("Si, eres mayor de edad y además estás jubilado.")
} else if (edad > 125) {
    console.log("Anda ya, Tutankamon.")
}