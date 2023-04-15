let family = [
    {
        type: "padre",
        name: "Miguel",
        adress: [28029, "Madrid"],
    },
    {
        type: "madre",
        name: "Lucia",
        adress: ["Madrid"],
    },
    {
        type: "hijo",
        name: "Luis",
        adress: ["LPGC"],
    },
];

// console.log(family[0].adress);
// console.log(family[1].adress);
// console.log(family[2].type);
// console.log(family[2].adress);
//console.log(family[0].adress[1]);

// for (let i = 0; i < family.length; i++) {
//     console.log(family[1].adress);

// }

for (i = 0; i < family.length; i++) {
    for (x = 0; x < family[i].adress.length; x++) {
        family[i].adress[x] == 28029 && console.log(`El ${family[i].type} que se llama ${family[i].name} vive en el ${family[i].adress[i]} de ${family[i].adress[i + 1]} `)
    }
}