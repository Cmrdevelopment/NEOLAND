const fs = require ("fs");

const movie = [
{
    title: "Infinity pool",
    year: 2023,
    availables: false,
},
{
    title: "dora",
    year: 2020,
    availables: true,
},
{
    title: "Infinity world",
    year: 2019,
    availables: true,
    },
];

const movieCopyIncrement = movie.map((movie, index)=>({
    ...movie,
    view: false,
}));

console.log(movieCopyIncrement);

const movieJsonToString = JSON.stringify(movieCopyIncrement);


fs.writeFile("moviesCopy.Json", movieJsonToString, () => {
    console.log(("Movie write ok 👌"));
})