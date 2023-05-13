

const fs = require("fs");


// Metodo readFile

fs.readFile("movies.json", (error, movie)=> {
    const parseMovies = []
    error ? console.log("No se ha podido leer el archivo ❌"):
    parseMovies.push(JSON.parse(movie));
    console.log(parseMovies);
});

//? JSON.parse(movie) => para pasarlo a texto plano o legible