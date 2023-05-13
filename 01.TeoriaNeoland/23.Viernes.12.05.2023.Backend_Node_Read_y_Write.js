//? Nos explicó como mejorar la velocidad en movil del proyecto de JS

// TODO ---> BACKEND
// TODO ->NODE.JS

//? Aquí tenemos ejemplos de los métodos de escritura y lectura: https://github.com/NaturalIntelligence/fast-xml-parser/blob/97713ad3ec709f4612118120ce3fde310eed60ec/docs/v4/1.GettingStarted.md

//* JSON // XML // CCV(excel) estás son las tres formas de recibir y enviar los base de datos

// Es un entorno de desarrollo

//! Para abrir un proyecto de node => npm init -y ==> Estamos inicializando un package.json

// Un package.json son los diferentes archivos que se ejecutan dentro dentro de él y los script son los que se ejecutan con un npm run

//? Escritura / Lectura de ficheros y Web scrapping

// Dentro de la carpeta se hacen dos archivos: Uno de Escritura y otro de Lectura de ficheros
// (package.json) Los scripts son los npm run

// Se ejecuta un scrip con npm run write ó con npm run read o según el nombre que le pongas en el sripts dentro de package.json

//-----> npm run read para ejecutar el read
//-----> npm run write para ejecutar el write

//?--------------> Read And Write
//?--------------> Read
// Node tiene una libreria que se llama fs y esta libreria lee y escribe texto plano
// Metodo readFile o writeFile según sea el de lectura o el de escritura

//TODO ---> JSON.parse(movie) => para pasarlo a texto plano o legible

//?--------------> Write
//Para hacer modificaciones masivas de objetos
// Write lo cojo y lo vuelvo a escribir tantas veces como desee hacer cambios

//? 2.- --------------> XML(importante)
// nmp init -y para crear un proyecto de node

//! Libreria que lee y escribe archivos es fs => "LO PREGUNTA MUCHO"

// Hay que instalar una libreria => npm i fast-xml-parser
//?--->> Tres metodos
// XML Parser, XMLBuilder, XMLValidator => nos permite validar los diferentes elementos en nuestro Backend para que cumpla la sintaxis correcta que tiene XML y lo requerimos de la libraria npm i fast-xml-parser

// El objetivo es leer y escribir y pasarlo a texto plano (fs)

//TODO --->> Instanciar es igual a hacer un new (es hacer un nuevo objeto)

//? ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TODO --->> LLamada de ficheros: Si queremos llamar a los datos debemos llamar a una función dentro, si quiero utilizar los datos de escritura o lectura tengo que llamar a otra función que se encarge de tratarlos
//? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// no se puede variables globales, es decir, que se ponen dentro de la función y nunca fuera

//! Los OBJETOS no SON ITERABLES

// Es iterables si ponemos llaves {} y no es iterable si ponemso corchetes []

//! Grapeador: Elemento que está por encima de otros elementos, es el PADRE, es decir, da error si no tiene elemento padre

// Cuando hacemos un XML lo validamos con una web para confirmar que está correcto: https://www.xmlvalidation.com/
// También lo podemos hacer con el XMLValidator que es uno de los tres metodos pero es más ágil con la web

//? 3.- --------------> CCV

// npm i csv parser => Transforma csv a json

//? 4.- Inquirer

// npm i inquirer

// Si se importa la libreria con import se hace algo diferetne, lo hace así en esta ocasión para que lo veamos ("type": "modules")

//? 5.- CorrectTEXT

// Vamos a corregir un texto que tiene números

// data.match(/D/g) (digitos globales) generador de expresiones regulares, son expresiones para hacer cosas, hay páginas que lo hacen

//? 6.- Web scrapping

// Se hace con la tecnologia escroniom, se utiliza una libreria puppeteer
// Un brousser es crear un navegador
// npm init -y
// Instalamos la libreria npm i inquirer
// Instalamos la libreria npm i puppeteer

// import fs from "fs";
// import inquirer from "inquirer";
// import puppeteer from "puppeteer";

// En package.json poner "type": "module", y 
// "scripts": {
//    "start": "node index.js"}, ==> Se pone debajo de "Depurar" 

//! Se quitan las llaves para no poner return

// npm run start es para lanzanrlo en al consola

//? Ejercicios: Hacer un Web scrapping




