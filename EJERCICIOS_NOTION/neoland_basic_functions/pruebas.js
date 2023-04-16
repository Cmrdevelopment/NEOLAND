// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     direccion: {
//         ciudad: 'Bogotá',
//         pais: 'Colombia'
//     }
// };

// const { nombre, edad, direccion: { ciudad, pais } } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(ciudad, "y", pais);  




const alimentos = ["Tomate", "Lechuga", "Pan", "Galletas", "Agua"]
// for (let i = 0; i < alimentos.length; i++) {
//     const alimento = alimentos[i]
//     console.log(alimento)
// }


// for (let alimento of alimentos) {
//     console.log(alimento)
// }

// alimentos.forEach((alimento) => {
//     console.log(alimento)
// })


const movies = ["Batman", "Dune", "Titanic", "Babylon"]

//FOREACH
movies.forEach((movie, i) => console.log(movie, i))

alimentos.forEach((alimento, i) => {
    console.log(alimento, i);
})


