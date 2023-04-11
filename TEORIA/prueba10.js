// let movie
// movie = "Titanic"
// console.log("movie")

// let pelicula = "Titanic"
// console.log("pelicula")

// const frase = "Yo soy el \"gato\" con botas"
// console.log(frase)

// const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// console.log(goodStr)

// const badStr = 'Finn responds, "Let\'s go!"'
// console.log(badStr)

// // Lista con
// // Tu nombre, Tu edad, ¿Eres desarollador?, Tu fecha de nacimiento, Tu libro Favorito con propiedades (titulo, autor, fecha, url)

// const lista = ["Carlos", 52, false];
// const lista2 = [22, 10, 1970];
// const libro = {
//     nombre: "Desgranando La Esencia del Mercado",
//     autor: "Carlos Martín",
//     fecha: "15 Noviembre 2019",
//     url: "https://cmrbolsa.com/mi-libro/",
// }

// console.log(lista);
// console.log(lista2);
// console.log(libro)


// Recorrer un Array

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (x = 0; x < number.length; x++) {
//     console.log(number[x]);
// }

// // Recorrer un Array que contiene un objeto

// let family = [
//     {
//         type: "padre",
//         name: "Miguel",
//         adress: [28029, "Madrid"],
//     },
//     {
//         type: "madre",
//         name: "Lucia",
//         adress: ["Madrid"],
//     },
//     {
//         type: "hijo",
//         name: "Luis",
//         adress: ["LPGC"],
//     },
// ];

// console.log("Linea 62", family);
// console.log("Linea 63", family[0].adress);
// console.log("Linea 64", family[1].adress);
// console.log("Linea 65", family[2].type);
// console.log("Linea 66", family[2].adress);
// console.log("Linea 67", family.type);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// PRUEBAS UNCIONES ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function dimeHola(saludar) {
//     console.log(saludar + "Saludar es un acto social")
// }
// dimeHola("Ey, que tal. ")

// ¿Crea una función que te diga la edad? con una función normal y a través de un array

// function edad(years) {
//     if (years > 18) {
//         console.log("Al ser mayor de edad puedes entrar enseñando el carnet")
//     } else
//         console.log("No puedes pasar porque eres menor de edad")
// }

// edad(9)

// const edades = (yearsArr) => {
//     if (yearsArr > 18) {
//         console.log("Al ser mayor de edad puedes entrar enseñando el carnet")
//     } else
//         console.log("No puedes pasar porque eres menor de edad, porque tengo " + yearsArr "años")
// }

// edades(10)

// // ¿Crea una función que te diga la edad con tramos desde 5 años? COn uan función normal y a ravs de un array

// function eda(year) {
//     if (year >= 5) {

//     }
// }


// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// console.log(avengers[3])