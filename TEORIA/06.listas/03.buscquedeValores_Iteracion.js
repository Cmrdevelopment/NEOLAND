// Iterar los valores de una lista (acceder a cada uno de los valores de una forma unitaria)

const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (más eficiente) .forEach() ==> (acceder a cada uno de los valores de una forma unitaria)
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {                            // Aquí mira cada valor de la variable 
    suma += valor;                                      // Aquí le digo que la suma me la sumes al valor
    console.log(valor) // 3, 6, 2, 77, 2, 3, 93, 19
})
console.log(suma) // 205

// Búsqueda de "un valor" dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable) // 90

// Busqueda de un valor dentro de una lista de objetos 

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

// 1ª forma

const objeto1 = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
})
console.log(objeto1) // { nombre: 'Miguel', edad: 28 }

// obtener la edad

const objeto2 = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
})
console.log(objeto2.edad) // 28

// 2ª Forma

const objeto3 = listaObjetos.find(o => {
    return o.nombre === "Miguel"
})
console.log("linea 67", objeto3) // { nombre: 'Miguel', edad: 28 }

// obtener la edad

const objeto4 = listaObjetos.find(o => {
    return o.nombre === "Miguel"
})
console.log("linea 74", objeto4.edad) // 28

// 3ª forma

const objeto5 = listaObjetos.find(o => o.nombre === "Miguel")
console.log("linea 79", objeto5) // { nombre: 'Miguel', edad: 28 }

// obtener la edad

const objeto6 = listaObjetos.find(o => o.nombre === "Miguel")
console.log("linea 84", objeto6.edad) // 28

// Otra forma de obtener la edad del objeto5 

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log("linea 89", edad) // 28