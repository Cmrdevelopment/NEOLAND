// Cómo trabajar con listas (arrays, arreglos, vectores)

let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1] // [id: 5] es un objeto y var1 es la variable anterior asignada = {id: flase}

console.log(array) // resultado: [1, "hola", false, { id: 5 }, null, undefined, { id: false }]

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....

console.log(array[0]) // 1
console.log(array[1]) // hola
console.log(array[2]) // false
console.log(array[3]) // id: 5

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array. Mutar significa que va a cambiar el valor del array

// Valores al final -> Push ==> se pone al final del anterior array

array.push("final", 45, 100, false)
console.log(array) // [1, "hola", false, { id: 5 }, null, undefined, { id: false }, "final", 45, 100, false]

// Valores al principio -> Unshift ==> se pone al inicio del anterior array

array.unshift("inicio", 87, 99)
console.log(array) // // ['inicio', 87, 99, 1, "hola", false, { id: 5 }, null, undefined, { id: false }, "final", 45, 100, false]

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

// Valores al final -> Pop ==> cada vez que los lanzamos elimina el último, en este caso el false
const array2 = [1, 3, "hola", false]
array2.pop()
console.log(array2) // [1, 3, "hola"]

// Valores al principio -> Shift
array2.shift()
console.log(array2) // [3, "hola"] ==> El resultado de pone shift es que quita el 1 (ten en cuenta que flase lo habiamos quitado antes en el ejemplo del pop)

// ___________________________________

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1); // el primer número (2) nos dice desde donde queremos eliminar, en este caso, desde el número 3 de la lista de array3, 
// el segundo núúmero nos dice cuantos valores queremos eliminar, en este caso ponemos 1 y elimina el 3.
console.log(array3) // [1, 2, 4, 5, 6]

// Ejemplo2
array3.splice(2, 3);
console.log(array3) // [1, 2, 6]

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola", 9)
console.log(array3) // [1, 2, "hola", 9, 3, 4, 5, 6]

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 5) // ==> el 5 se sustituye por el hola porque es el segundo valr que está en la lista [1, 2, "hola", 9, 3, 4, 5, 6]
console.log(array3) // // [1, 2, 5, 9, 3, 4, 5, 6]

