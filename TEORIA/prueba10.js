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

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (x = 0; x < number.length; x++) {
    console.log(number[x]);
}

// Recorrer un Array que contiene un objeto

let family = [
    {
        type: "padre",
        name: "Miguel",
        adress: [28029, "Madrid"],
    },
    {
        type: "madre",
        name: "Lucia",
        adress: ["Madrid"],
    },
    {
        type: "hijo",
        name: "Luis",
        adress: ["LPGC"],
    },
];

console.log("Linea 62", family);
console.log("Linea 63", family[0].adress);
console.log("Linea 64", family[1].adress);
console.log("Linea 65", family[2].type);
console.log("Linea 66", family[2].adress);
console.log("Linea 67", family.type);

