

// Cómo unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2)) // ["hola", 2, false, null, "adiós", 8, true, undefined] ==> Nos devuelve las dos unidas pero no modifica los valores de las listas.
console.log(lista1) // ["hola", 2, false, null]

// Si queremos concatenar (tener) una lista con todos los valoes debemos ahcer esto:

const lista3 = lista1.concat(lista2)
console.log(lista3) // ["hola", 2, false, null, "adiós", 8, true, undefined]

// Cómo unir dos listas con el "FACTOR de PROPAGACIÓN" (nos loguea "POR SEPARADO" los valores de la lista por separado)

console.log(...lista3) // hola 2 false null adiós 8 true undefined

const lista4 = [...lista1, ...lista2]
console.log(lista4) // ["hola", 2, false, null, "adiós", 8, true, undefined] ==> Cómo vemos es la misma forma de concatenar que en la lista3

// ERROR!! Mal entendido el concepto del "FACTOR de PROPAGACIÓN"

const lista5 = [lista1, lista2]
console.log(lista5) // ["hola", 2, false, null], ["adiós", 8, true, undefined]


// Cómo obtener una "porción de una lista" a partir de otra .slice()

const array = ["hola", 1, 2, 3, true, null, "adios"]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

console.log(array.slice(1, 4)) // [1, 2, 3] ==> Sale esto porque al tener puesto 1 se salta el 0 que 
//////////////////////////////// es "hola" y sale el 1, 2, 3 porque son los 4 primeros ["hola", 1, 2, 3 ...

const array2 = array.slice(2, 5)
console.log(array2) // [2, 3, true] ==> Al poner 2 decimos que queremos que empiece por el 2 ("hola", 1, 2) y al poner 5 queremos que no coja el 5 (es decir, el null)

// Otra forma de hacerlo utilizando valores "negativos", entonces empieza desde el final.

const array3 = array.slice(2, -2) // Al poner 2 decimos que queremos que empiece por el 2 ("hola", 1, 2) y al poner -2 queremos que descuente 2 desde el final, 
/////////////////////////////////// es decir, quitar el "adios" y el null
console.log(array3) // [2, 3, true]