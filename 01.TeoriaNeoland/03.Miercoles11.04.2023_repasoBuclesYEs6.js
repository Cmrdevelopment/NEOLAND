
// Bucles ==> repaso (for, for of, forEach, for in, WHILE,  )
// HOISTING y CLOUSURES
// ES 6 (TEMPLETE STRING, DESTRUCTURING, SPREAD OPERATOR)
///// METODOS (Map, Filter, Find, Every, Some, Reduce)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// LO NORMAL es que la utlización de los bucles se utilizan así:

// FOR normal para meter mano en todo el funcionamiento del bucle
// FOR OF y FOR EACH para arrys
// FOR IN para objetos
// WHILE es para bucles infinitos

// Bucles, una herramienta para recorrer elementos recorribles (iterar elementos iterables)
// Elementos recorribles
// Objetos y array
// A veces un String y puedes recorrer letra por letra y te saca letra por letra

// Para que sirve? PARA REALIZAR TAREAS reiradas > REITERAR TAREAS UNA Y OTRA VEZ

// Sintaxis básica for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 

// }

// Es super personalizable, que vaya hacia delante, detrás y casi todo loque quieras

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// FOR ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let index = 0; index < array.length; index++) { ===> i = 0 es para empezar el eje del bucle, i < array.length hasta cuando quiero que haga el bucle, i++ que le pasa al bucle 
//     const element = array[index];  ==> 

// for (let i = 0; i < 10; i++) {
//     console.log("Hola", i)

// }

// sale esto:
// Longitud y posición
// Hola 0
// Hola 1
// Hola 2
// Hola 3
// Hola 4
// Hola 5
// Hola 6
// Hola 7
// Hola 8
// Hola 9

// Explicación de como es el bucle en repaso bucles de clase del día de hoy y se hizo ejemplos

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// FOR OF ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ¿Que hace? Hace automaticamente lo del FOR pero con menos código, sin length
// No se puede sacar el indice, saca los valores
// Hace todo lo del for pero con menos codigo: "PASA DE ESTO" 

//const alimentos = ["Tomate", "Lechuga", "Pan", "Galletas", "Agua"]
// for (let i = 0; i < alimentos.length; i++) {
//     const alimento = alimentos[i]
//     console.log(alimento)
// }

// "A ESTO"
// for (let alimento of alimentos) {
//     console.log(alimento)
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// FOR EACH ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Para array
// ¿Que hace? Hace automaticamente lo del FOR pero con menos código, sin length
// "SI SE PUEDE SACAR EL INDICE", es decir, la posición de cada uno de los array, en este caso, tomate[0], lechuga[1], etc
// Igual que el for of pero cambia la sintaxis

// alimentos.forEach((alimento, i) => {
//     console.log(alimento, i)
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// FOR IN ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Es para objetos de llaves
// ¿Que hace? Hace automaticamente lo del FOR pero con menos código, sin length
// Saca las claves, si probamos hacer un FOR IN en un array lo que saca es el 1, 2, 3 porque saca las claves, por eso no me sirve recorrer un array con FOR IN (recuerda que las claves son los atributos (name:, age:, city:, etc) y NO sacará Carlos, 52 y LPGC)
// Si lo ponemos así:
// const character = {
//     name: "Paco",
//     age: 87,
//     city: "Madrid",
//   }
  
//   for (let key in character) {
//     console.log("La clave " + key + " tiene como valor " + character[key])
//   }

// La clave name tiene como valor Paco
// La clave age tiene como valor 87
// La clave city tiene como valor Madrid


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// WHILE  ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cuidado que puedes hacer un bucle infinito
// Ejmplo: tengo una varia llamada num que es = a cero
// let num = 0;
// // Mientras num sea < que 5
// while(num < 5) {
//     num++ // me vas a sumar 1 a num
//     console.log(num) // y me lo vas a sacar por consola
// } //




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// HOISTING  ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Muchos desarrolladores llaman a la función antes y no deberia ser así, JS puede recolocar las funciones pero las constantes no ==>
// Es decir, ponen el console.log arriba y las funciones abajo y funcionan pero hoy en día en ES6 casi todo se hace con =>
// y ahí si hay que tener en cuenta que el JS funciona en cascada

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// CLOUSURES  ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Es una funcion dentro de otra donde la segunda función puede leer dentro y fuera la informaión de la primera
    // Es el acto de devolver lo principal a lo secundario, porque se ha creado en lo principal

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// ES 6  ///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Nuevos metodos de JS para que todo sea más agil y más rápido, sintaxis moderna

// 1.- TEMPLETE STRING

    // ${} es para ejecutar JS en ES6 

// 2.- DESTRUCTURING

// 3.- SPREAD OPERATOR

    // concat sin hacer un concat y un push sin hacer un push pero simplificado
    // Sirve mucho para tareas por hacer

// METODOS

// MAP: Puedo hacer cosas de un bucle normal, puedo devolver un array de objetos con todo modificado, puedo crear un array nuevo solo con las propiedades(atributos) que yo quiera y además puedo hacer un nuevo array de objetos utilizando propiedades (atributos) originales cambiandole la clave y encima metiendole cosas nuevas

// IMPORTATNE: EL MAP tambien nos sirve para quedarte con la información que venga de una base de datos de una forma ordenada y cambiar las claves, por ejemplo para cambiar una propiedad (atributo) que no se entienda bien por otra, por ejemplo viene como img Dr27 pues lo podemos cambiar por Foto.

// Con el MAP puedo sacar un array de solo los datos que me interese porque puedo tener un array de objetos inmenso y soloquerer 5 porpiedades

// Devuelve un nuevo array

// windows + . y pones imojis (los imojois imputan como string)

/////////////// Cambiar todos los humanos en zombies

// const humans = ["😀", "😀", "😀", "😀", "😀", "😀"]
// const zombis = humans.map((human) => "🧟‍♀️")
// console.log(zombis)

// const humans = ["😀", "😀", "😀", "😀", "😀", "😀"]
// const zombis = humans.map((lo_que_quieras_poner_aqui_lo_pones) => "🧟‍♀️")
// console.log(zombis)

// OTRO EJEMPLO DE MAP

// const movies = [
//     {
//       title: "The Batman",
//       year: 2022,
//     },
//     {
//       title: "Dune",
//       year: 2021,
//     },
//     {
//       title: "Gremlins",
//       year: 1985,
//     },
//   ]

// Variable movieTitles es igual a movies.map y por cada una de las movies individuales te quedas con el movie.movieTitles
// const movieTitles = movies.map((movie) => movie.title)
// console.log(movieTitles) 
// Devuelve un array nuevo con los nombres de las peliculas nada más
// [ 'The Batman', 'Dune', 'Gremlins' ]

// PUEDO HACER UN NUEVO ARRAY DE OBJETOS de esta MANERA, cambiandole las claves y añadiedole cosas (clases) nuevas

// const newMovies = movies.map((movie) => ({
//     titulo: movie.title,
//     año: movie.year,
//     released: true,
// }))

// console.log(newMovies);


/////////////////////////////////////////////////////////////// FILTER ///////////////////////

// Filter: Es como un Buscador para encontrar TODOS, te devuelve un ARRAY con los elementos que cumplan la condición

// const characters = [
//   {
//     name: "Frodo",
//     species: "Hobbit",
//     age: 24,
//   },
//   {
//     name: "Legolas",
//     species: "Elve",
//     age: 160,
//   },
//   {
//     name: "Sam",
//     species: "Hobbit",
//     age: 25,
//   },
// ]

// const hobbits = characters.filter((character) => character.species === "Hobbit")
// console.log(hobbits)

// const colors = ["red", "blue", "green", "yellow", "black", "white"]
// const onlyL = colors.filter((colorL) => colorL.includes("l"))
// console.log(onlyL);

// si queremos que salgan a mayusculas o minusculas debemos igualarlas con el método toLowerCase / toUpperCase

// Si queremos que sagan todos, los que hemos puesto en minuscula y en mayuscula debemos poner toLowerCase() y toUpperCase(), si no solo pondra´los que esten en mayuscula o en minuscula.

// const colors2 = ["red", "blue", "green", "yeLLow", "black", "white"]
// const onlyLl = colors2.filter((colorLl) => colorLl.toLowerCase().toUpperCase().includes("l"))
// console.log(onlyLl);

// Que salgan los character < 50 años

// const youngCharacters = characters.filter((character) => character.age < 50)
// console.log(youngCharacters)

/////////////////////////////////////////////////////////////// FIND ///////////////////////

// Find: Encontrar el objeto o el elemento y te lo devuelve, es SOLO la priemra concidencia y te devuelve UN ELEMENTO. Para encontrar SOLO la 1º, ejemplo un ID ó un DNI. 

// const characters = [
//   {
//     name: "Frodo",
//     species: "Hobbit",
//     age: 24,
//   },
//   {
//     name: "Legolas",
//     species: "Elve",
//     age: 160,
//   },
//   {
//     name: "Sam",
//     species: "Hobbit",
//     age: 25,
//   },
// ]

// // Sam es igual a character.find y por cada uno de los character te quedas con el que character.name esa igual a Sam

// const sam = characters.find((character) => character.name === "Sam")
// console.log(sam);

/////////////////////////////////////////////////////////////// EVERY ///////////////////////

// Every: Devuelve un true o un false, es decir, un Boleano (si todos cumples la condición) => Para detectar si todos cumple la condición. 

const vegan = ["🥝", "🥝", "🥝", "🥝", "🍔", "🥝"]
const isVegan = vegan.every((item) => item === "🥝")

console.log(isVegan); // al no ser todos 🥝 devuelve false

/////////////////////////////////////////////////////////////// SOME ////////////////////////

// Some: si uno cumple la condicion => Para detectar si uno es un kiwi de un array lleno de frutas. 

const someIsVegan = vegan.some((item) => item === "🥝")
console.log(someIsVegan)



/////////////////////////////////////////////////////////////// REDUCE ////////////////////////

// Reduce: Se llama reduce porque concentra el contador en un número 

// const average = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0); El cero es de donde parte el acumulador, normalmente es cero pero puede ser > 0 si e spor un ticket de descuento ó por puntos que te dan en un campo de golf, etc

const nums = [20, 23, 45, 68, 76, 2000, 6]
const total = nums.reduce((acumulador, num) => acumulador + num, 0)
console.log(total) /// 2238

Every:
