//? Nos explicó como mejorar la velocidad en movil del proyecto de JS

// TODO ---> BACKEND
// TODO ->NODE.JS

//! JSON // XML // CCV(excel) estás son las tres formas de recibir y enviar los base de datos

// Es un entorno de desarrollo

//! Para abrir un proyecto de node => npm init -y ==> Estamos inicializando un package.json

// Un package.json son los diferentes archivos que se ejecutan dentro dentro de él, Los script son los que se ejecutan con un npm run

//? Escritura / Lectura de ficheros y Web scrapping

// Dentro de la carpeta se hacen dos archivos: Uno de Escritura y otro de Lectura de ficheros
// (package.json) Los scrpts son los npm run

// Se ejecuta un scrip con npm run write ó con npm run read en package.json
//-----> npm run read para ejecutar el read
//-----> npm run write para ejecutar el write

//?--------------> Read
// Node tiene una libreria que se llama fs y esta libreria leee y escribe texto plano
// Metodo readFile

//TODO ---> JSON.parse(movie) => para pasarlo a texto plano o legible

//?--------------> Write
//Para hacer modificacione smasivas de objetos
// Write lo cojo y lo vuelvo a escribir tantas veces como desee hacer cambios

//--------------> XML(importante)
//! Libreria que lee y escribe archivos es fs => "LO PREGUNTA MUCHO"

// Hay que instalar una libreria => npm i fast-xml-parser
// Tres metodos
// XML Parser, XMLBuilder, XMLValidator => nos permite validar

//? 3.- El objetivo es leer y escribir y pasaro a texto plano

// Instanciar es igual a hacer un new (es hacer un nuevo objeto)

// Si queremos llamar a los datos tengo en read XML que llamar dentro a otra función debo poner otra función dentro

// Es iterables si penemos llaves

// no se puede variables globales, es decir, que se ponen dentro de la función y nunca fuera

//! Grapeador: Elemento que está por encima de otros elementos, es el PADRE

//--------------> CCS

// npm i csv parser => Transforma csv a josn

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




