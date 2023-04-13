// Iteración #2: Buscar la palabra más larga (Lo hice con AYUDA de compañeros)

// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Ejercicio resuelto (con ayuda de Pedro)

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let palabraMasLarguita = ""
    for (i = 0; i < param.length; i++) {
        if (param[i].length > palabraMasLarguita.length) {
            palabraMasLarguita = param[i]
        } else {
            palabraMasLarguita == palabraMasLarguita
        }

    }
    return (palabraMasLarguita)
}

console.log(findLongestWord(avengers))

// Ejercicio resuelto con el for (con ayuda de compañeros)

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(param) {
//     let nombreMas = avengers[0]
//     for (i = 0; i < avengers.length; i++) {
//         if (avengers[i].length > nombreMas.length) {
//             nombreMas = avengers[i];
//         }

//     }
//     return nombreMas;

// }

// console.log(findLongestWord())

// // Ejercicio resuelto con el forEach (con ayuda pero con ternario)

// const avengerss = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// const findLongestWord2 = (array) => {
//     let palabraMasLarga = "";
//     array.forEach((heroe, index) => {
//         heroe.length > palabraMasLarga.length
//             ? (palabraMasLarga = heroe) : palabraMasLarga = palabraMasLarga
//     })
//     return palabraMasLarga
// }

// Ejercicio resuelto con el for

// console.log(findLongestWord2(avengerss))

// ? si se cumple la condición de que la logitud de heroe > que la longitud que
// palabraMásLarga entonces palabraMásLarga = heroe : (sino) palabraMásLarga = palabraMásLarga


// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// function findLongestWord(param) {
//     let numeroMasLargo = "";
//     for (i = 0; i < avengers.length; i++) {

//         if (avengers[i].length > numeroMasLargo.length) {
//             numeroMasLargo = avengers[i];
//         }
//     }
//     return (numeroMasLargo);
// }

// console.log(findLongestWord(avengers))





const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let numeroMasLargo = "";
    for (i = 0; i < param.length; i++) {

        if (param[i].length > numeroMasLargo.length) {
            numeroMasLargo = param[i];
        }
    }
    return (numeroMasLargo);
}

console.log(findLongestWord(avengers))