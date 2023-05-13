
const fs = require("fs");
const {XMLBuilder} = require("fast-xml-parser");

//! --------------EJEMPLO 1: SIN ELEMENTO ROOT ----ESTO DA ERROR tiene que tener un elemento grapeador padre

const alumnos = [
{
    name: "Rodri",
    age: "43",
    job: "dev",
},
{
    name: "Laura",
    age: "37",
    job: "libreria",
},
{
    name: "Antonio",
    age: "33",
    job: "dev",
},
];

let options = {
    ignoreAtributes: false,
    format: true,
    arrayNodeName: "alumnos",
};

const builder = new XMLBuilder(options);

let output = builder.build(alumnos);
console.log(output);

fs.writeFile("alumnos.xml", output, () => {
    console.log("Escrito correctamente 👌");
})


//! ----------------- CONSTRUIR UN XML CON UN ELEMENTO PADRE DE LA COLECCION -------------
//! ----------------- Ejemplo 2 con el elemento padre o ROOT -------------lo correcto a nivel sintactico ---

options = {
    ignoreAtributes: false,
    format: true,
};

const alumnsNeoland = {
    alumsNeolandROOT: {
        alumns: [
            {
                name: "Rodri",
                age: "43",
                job: "dev",
            },
            {
                name: "Laura",
                age: "37",
                job: "libreria",
            },
            {
                name: "Antonio",
                age: "33",
                job: "dev",
            },
        ],
    },
};

const buildWithRoot = new XMLBuilder(options);

output = buildWithRoot.build(alumnsNeoland);

fs.writeFile("rootAlumns.xml", output, () => { // el output es el objeto que queremos escribir y rootAlumns.xml es el archivo que se crea con los datos
    console.log("Escrito ok elemento root 👌");
});

// en consola se ejecuta así: npm run xml_write