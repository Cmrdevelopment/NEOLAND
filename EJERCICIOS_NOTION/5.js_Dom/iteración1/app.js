// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

// <button class="showme">Pillame!</button>

const showmeClass = document.querySelector(".showme")
console.log(showmeClass);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pilladoid = document.querySelector("h1")
console.log(pilladoid)

// 1.3 Usa querySelector para mostrar por consola todos los p

const todasLasPes = document.querySelectorAll("p")
console.log(todasLasPes);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemonClass = document.querySelectorAll(".pokemon")
console.log(pokemonClass);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMeFunction = document.querySelectorAll(`[data-function="testMe"]`);

console.log(testMeFunction)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(testMeFunction[2])

