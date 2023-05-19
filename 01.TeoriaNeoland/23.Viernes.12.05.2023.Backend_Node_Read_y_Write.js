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

//TODO --->> Instanciar es igual a hacer un new (es hacer un nuevo objeto) y va en empieza en mayusculas

//? ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TODO --->> LLamada de ficheros: Si queremos llamar a los datos debemos llamar a una función dentro, si quiero utilizar los datos de escritura o lectura tengo que llamar a otra función que se encarge de tratarlos
//? //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// no se puede variables globales, es decir, que se ponen dentro de la función y nunca fuera

//! Los OBJETOS no SON ITERABLES

// Es iterables si ponemos llaves {} y no es iterable si ponemso corchetes []

//! Grapeador: Elemento que está por encima de otros elementos, es el PADRE, es decir, da error si no tiene elemento padre

// Cuando hacemos un XML lo validamos con una web para confirmar que está correcto: https://www.xmlvalidation.com/
// También lo podemos hacer con el XMLValidator que es uno de los tres metodos pero es más ágil con la web

//? 3.- --------------> CSV

// Es la forma que comparte el excel los archivos

//! ----> IMPORTANTE QUE NO HAYA LINEAS EN BLANCO EN EL CSV SINO GENERA PROBLEMAS

// Libreria que se debe instalar en el proyecto de CSV: npm i csv-parser => Transforma csv a json

// Mirar el readme

//? 4.- Inquirer

// npm i inquirer

//TODO--->> Si se importa la libreria con import se hace así: Se pone en package.json debajo de "main" ==>  ("type": "module",)

//TODO--->> y en "scripts": {
//TODO--->>    "start": "node inquirer.js"
//TODO--->> }

//-----> VAMOS A HACER UN CUSTON-PACKAGE-JSON  como hacer vite cuando nos pregunta sobre que proyecto queremos
// Es como si estuvieramos haciendo un proyecto de react con Vite
// -------> UTILIZAMOS INQUIRE PARA HACER LAS PREGUNTAS AL USUARIO POR LA CONSOLA > vamos a preguntar al usuario por el nombre del proyecto y si quiere instalar unas librerias en concreto
// Hacemos un prompt que son las preguntas que necesitamos que se contesten

//? 5.- CorrectTEXT

// Vamos a corregir un texto que tiene números

// data.match(/\D/g) (digitos globales) generador de expresiones regulares, son expresiones para hacer cosas, hay páginas que lo hacen

///El carácter \D representa cualquier carácter que no sea un dígito.
/// La /g en la expresión regular significa que la búsqueda debe ser global, es decir, buscar en todo el texto en lugar de solo la primera coincidencia.
/// paginas para aprender expresiones regulares
// ------> https://regex101.com/
// ------> https://regexr.com/

//? 6.- Web scrapping

// Se hace con la tecnologia escroniom, se utiliza una libreria puppeteer

// Comenzar un proycto de node: npm init -y
// Instalamos la libreria npm i inquirer
// Instalamos la libreria npm i puppeteer

// import fs from "fs";
// import inquirer from "inquirer";
// import puppeteer from "puppeteer";

// En package.json poner "type": "module", y
// "scripts": {
//    "start": "node index.js"}, ==> Se pone debajo de "Depurar"

// Un brousser es crear un navegador y hya que maximizarlo
/* const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
}); 
} /*

! Se quitan las llaves para no poner return

npm run start es para lanzanrlo en al consola. Se pone start porque es el nombre que hemos puesto en package.json en "scripts"

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  const items = await page.$$eval("div.search-item", (nodes) =>
    nodes.map((n) => ({
      title: n.querySelector(".a cm-txt")?.innerText, // Optional chaining es la ? y dice que si no tienes lo que pido disponible no me rompas la ejecución
      image: n.querySelector(".img-responsive")?.src,
      price: n.querySelector("div.buy--price")?.innerText,
      type: n.querySelector("span.cm-txt")?.innerText,
    }))
  );
} */

//? Ejercicios: Hacer un Web scrapping

//? ///////////////////////////////////////////////////////////////////
//TODO --->> si hay paginación en la web como se pone para pasar a la siguiente página? ejemplo Amazon
//TODO --->> si hay categorias como se entra en una? por ejemplo en Leroy Merlin
//? ///////////////////////////////////////////////////////////////////
