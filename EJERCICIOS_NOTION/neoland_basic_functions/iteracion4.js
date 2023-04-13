// Iteración #4: Calcular el promedio

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

// Resuelto con ayuda de Pedro

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sumaArray = 0
    for (i = 0; i < param.length; i++) {
        sumaArray += param[i]
    }
    return (sumaArray / param.length)
}
console.log(average(numbers))

// 1.- Conocer la longitud del array
// 2.- Sumar todo los number del array
// 3.- Hacer el promedio


// Resuelto con ayuda de Jonathan

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let acc = 0;
    param.forEach((param) => {
        acc += param
    })
    return (acc / param.length)
}
console.log(average(numbers2))





