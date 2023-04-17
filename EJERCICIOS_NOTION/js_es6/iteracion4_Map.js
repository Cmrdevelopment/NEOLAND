// Iteración #4: Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
];

const newUsers = users.map((user) => user.name)
    console.log(newUsers);


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const nameUser2 = users.map((user) => {
    if (user.name[0] === "A") {
        return (user.name = "Anacleto")
    } else {
        return (user.name)
    }
})
console.log(nameUser2);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

// Resulto: Opción 1

const citiVisitado = cities.map ((visita) => {
    if (visita.isVisited == true) {
        return (visita.name = visita.name + " Visitado")
    } else {
        return (visita.name)
    }
})
console.log(citiVisitado);

// Otra forma de hacerlo: Lo hice con los compañeros (para que salga correcto debe estar comentado la opción 1)

const cityVisitando2 = cities.map ((city) => ({
    name: city.name,
    Estado: city.isVisited === true ? "visitado" : "No visitado"
}))
console.log(cityVisitando2);















