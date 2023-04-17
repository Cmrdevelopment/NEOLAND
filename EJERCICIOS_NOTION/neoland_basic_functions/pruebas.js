

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
        console.log (user.name = "Anacleto")
    } else {
        console.log (user.name)
    }
})


const arr = [1, 2, 3, 4, 5, 50, 100];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
