// Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const age18 = ages.filter((age) => age > 18)
console.log(age18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const parAge = ages2.filter((pares) => pares%2 == 0)
console.log(parAge)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const newStreamers = streamers.filter ((streamer) => streamer.gameMorePlayed == `League of Legends`)
console.log(newStreamers);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers3 = streamers2.filter((streamers) => streamers.name.toLowerCase().includes("u"))
console.log(streamers3);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion  .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

// Con ayuda de compañeros y me cuesta entenderlo

const newStreamersLegengs = streamers2.filter((legend) => {
    if (legend.gameMorePlayed.includes("Legends")) {
        if (legend.age > 35) {
            legend.gameMorePlayed = legend.gameMorePlayed.toUpperCase()
        }
         return legend
    }
})
console.log(newStreamersLegengs);

// 5.6 y 5.7 cuando veamos DOM

