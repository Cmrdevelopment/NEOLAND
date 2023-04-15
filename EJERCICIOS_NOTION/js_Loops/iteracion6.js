// **Iteración #6: Mixed For...of e includes**

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
]

const guardarToys = []
for (juguete of toys) {
    if (!juguete.name.includes("gato")) {
        guardarToys.push(juguete)

    }
}
console.log(guardarToys)


// 1.- Recorrer todos los jueguetes con un bucle **for...of**
// 2.- Elimina los que incluyan la palabra gato


