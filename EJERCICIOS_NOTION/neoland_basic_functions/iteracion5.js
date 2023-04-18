// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// Ejercicio resuelto con compañeros

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// function averageWord(param) {
// let acc = 0
//     param.forEach((param) => {
//         if (typeof param == "number") {
//             acc += param
//         } else {
//             acc += param.length
//         }
//     })
//     return (acc)
// }

// console.log(averageWord(mixedElements))


// Ejercicio resuelto 

function averageWord(param) {
    let acc = 0
    param.forEach((param) => {
        if (typeof param == "number") {
            acc += param
        } else {
            acc += param.length
        }
    })
    return (acc)
}
console.log(averageWord(mixedElements))

// CAMBIAR EL PARAM de foreach


