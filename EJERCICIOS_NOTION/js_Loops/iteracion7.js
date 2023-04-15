// **Iteración #7: For...of avanzado**

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:


const popularToys = [];
const toys = [
    { id: 5, name: 'Buzz MyYear', sellCount: 10 },
    { id: 11, name: 'Action Woman', sellCount: 24 },
    { id: 23, name: 'Barbie Man', sellCount: 15 },
    { id: 40, name: 'El gato con Guantes', sellCount: 8 },
    { id: 40, name: 'El gato felix', sellCount: 35 }
]

for (let valor of toys) {
    if (valor.sellCount > 15) {
        popularToys.push(valor)
    }
}
console.log(popularToys);


// 1.- Recorrer todos los jueguetes con un bucle **for...of**
// 2.- Añade los que tengan más de 15 ventas (sellCount)

// ==> lo que hace el for of es poner un nombre cualquiera, después el of y después el nombre de la variable a tener en cuenta
// el console.log(nombre de la variable a tener en cuenta) te da la lista del array