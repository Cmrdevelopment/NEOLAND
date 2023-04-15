// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

// Resuelto con ayuda de compañeros

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Mark'
];

function finderName(array, nombre) {
    let acc = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == nombre) {
            console.log(true, i);
        } else {
            acc++
        }
    }
    if (acc == array.length) console.log("false");
}
finderName(nameFinder, "Peter")

