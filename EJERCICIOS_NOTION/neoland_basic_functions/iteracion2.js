// Iteración #2: Buscar la palabra más larga

// Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Ejercicio resuelto con el for

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let nombreMas = avengers[0]
    for (i = 0; i < avengers.length; i++) {
        if (avengers[i].length > nombreMas.length) {
            nombreMas = avengers[i];
        }

    }
    return nombreMas;

}

console.log(findLongestWord())

// Ejercicio resuelto con el forEach

const avengerss = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const findLongestWord2 = (array) => {
    let palabraMasLarga = "";
    array.forEach((heroe, index) => {
        heroe.length > palabraMasLarga.length
            ? (palabraMasLarga = heroe) : palabraMasLarga = palabraMasLarga
    })
    return palabraMasLarga
}

console.log(findLongestWord2(avengerss))

// ? si se cumple la condición de que la logitud de heroe > que la longitud que
// palabraMásLarga entonces palabraMásLarga = heroe : (sino) palabraMásLarga = palabraMásLarga   