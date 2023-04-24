// Iteración #3: Calcular la suma (Lo hice con AYUDA de compañeros)

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

// Resuelto con ayuda de compañeros

// const numbers = [1, 2, 3, 5, 45, 37, 58];
// function sumAll(param) {
//     let sumNumbers = 0;
//     numbers.forEach(
//         numero => {
//             sumNumbers += numero
//         }
//     )
//     return sumNumbers
// }
// console.log("Linea 17 = ", sumAll());

// Resuelto con Jonathan

const numbers2 = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let acc = 0;
    param.forEach((param) => {
        acc += param
    })
    return (acc)
}
console.log(sumAll(numbers2))