// Iteración #3: Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const pointEs6 = [...pointsList]
console.log(pointEs6)

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name1: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const CopyToys = {...toy}
console.log(CopyToys);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newArrayPoints = [...pointsList3.concat(pointsLis2)]

console.log(newArrayPoints);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newArrayToys = {...toy1, ...toyUpdate}
console.log(newArrayToys);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

///////////////////////////// EN PROCESO 

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newarrayColor = [...colors, colors.splice(3,3)]

console.log(newarrayColor);
