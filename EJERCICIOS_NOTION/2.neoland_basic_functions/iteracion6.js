// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// Resuelto con ayuda de compañeros

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
// function removeDuplicates(param) {
//     let NoDuplicados = []
//     for (i = 0; i < param.length; i++) {
//         if (!NoDuplicados.includes(param[i])) {
//             NoDuplicados.push(param[i])
//         }
//     }
//     return NoDuplicados
// }

// console.log(removeDuplicates(duplicates))

// Comprobar si hay duplicados
// Eliminarlos
// Nueva array

// Resuelto con ternario

function removeDuplicates(param) {
    let NoRepeat = []
    for (i = 0; i < param.length; i++) {
        !NoRepeat.includes(param[i]) && NoRepeat.push(param[i])
    }
    return NoRepeat
}
console.log(duplicates);