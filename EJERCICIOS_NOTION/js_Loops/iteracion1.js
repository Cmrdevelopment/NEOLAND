// **Iteración #1: Usa includes**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

// Resuelto con ayuda de compañeros

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach((valor) => {
    if (valor.includes("Camiseta")) {
        console.log(valor)
    }
})

// ahora lo ponemos con los &&

// products.forEach((valor) => {
//     valor.includes("Camiseta") && console.log(valor)
// })

// Si queremos que salgan TODAS las que no tiene la palabra camiseta debemos ponerle una negación al valor

// products.forEach((valor) => {
//     !valor.includes("Camiseta") && console.log(valor)
// })


// Ahora lo hacemos con for ... of

// for (let valor of products) {
//     if (valor.includes("Camiseta")) {
//         console.log(valor)
//     }
// }
