//? Servidores web, Server y Protocolo HTTP (hipertexto, que es texto plano)

import { domainToASCII } from "url";

// Conceptos

// Servidor web y servidor de aplicaciones

// Servidor web

// Una api modifica

// La arquitectura esta compuesta por REQUEST y RESPONSE ¿Que elemento tiene REQUEST y RESPONSE?
//TODO Elementos de las REQUEST
//--->> METODO // URL // HEADER // BODY
//? /////////////////// METODOS
// GET > TRAE DATOS
// POST > CREA DATOS
// PUT > UPDATE
// PATCH > PARTIAL UP
// DELETE > REMOVE

// Permisos de CORS, barreras que ponemos al acceso de nuestra aplicación

//TODO Elementos de las RESPONSE

// Son las respuestas
// Codigo de estado: 200, 404, 500
// Encabezados
//

//! Express js es un freambook nos ayuda a hacer un backend de forma sencilla
// app.get(´/`, fuction(req, res, next) { next()} app.listen

// Node es bueno porque es muy rápido y flexible // por ejemplo php es el infierno
// Node es escalable, se le puede poner librerias, su estrutura se basa midlewers (tiene codigos intermedios para asegurar el backend)

//? Insomnia > Lo veremos con Laura

// Node sin instalar nada nos permite hacer un servidor HTTP

// npm init -y
// Instalamos npm init nodemon (Es para que se recargue la página cuando vea un cambio)
// package.JSON
// "start"
// "dev": "nodemon index.jx"
//! Mirar indexserver.js en server
// Requerimos el protocolo http
// cons hTtp =requiere("http"))
// sigue en repositorio
// para ejecutarlo es npm run dev

//? Enrutado básico sin framework
//

//? Express.js

// Se instala algo en desarrollo > npm -D i nodemon ==> Solo se utiliza en desarrollo
// npm i express
// package.JSON
// "start": "node index.jx"
// "dev": "nodemon index.jx"
// creamos el index.js
// creamos un servidor web con express que son las const en index.js
// nos traemos el puerto donde escuchamos el servidor > debe ser en constante y en mayuscular const PORT = 8080
// Creamos el servidor const app = express();
// los escuchamos > app.listen(PORT, () =>{console.log(`Server listening on por http://localhost:${PORT}`)})
// npm run dev

//? Express.js con ruta
// ver en visual (repositorio)
// lo hacemos con express rutes en index.js

//? Param y queryparams

// Los Param rompen la ejecucion si no lo ponemos
// Los queryparams no rompen la ejecucion si no lo ponemos

// Se instala algo en desarrollo > npm -D i nodemon ==> Solo se utiliza en desarrollo
// npm i express
// package.JSON
// "start": "node index.js"
// "dev": "nodemon index.js"
// creamos el index.js
// npm i express
// "start": "node index.jx"
// "dev": "nodemon index.jx"
// creamos un servidor web con express que son las const en index.js
// miramos el repositorio index.js
// los escuchamos > app.listen(PORT, () =>{console.log(`Listening on PORT http://localhost:${PORT}`)})
// Creamos las RUTAS => repositorio Params > index.js

// en el router.get hacemos un destructuring

// Cuando abra el navegador hay que añadirle ... localhost            8080/api/v1/person

//? .env => Son las variable de entorno (Es para que no se vea por parte de otros usuarios)
// npm i express
// npm i dotenv (es para poder utilizar el .env)
// > npm -D i nodemon
// package.JSON
// "start": "node index.js"
// "dev": "nodemon index.js"
// creamos el index.js desde la raiz principal
// creamos el archivo .env desde la raiz principal
//--> PORT=8080
//--> EMAIL=
//-->PASSWORD=
// dentro de gitignore ponemos .env para que no se los datos del .env
// en index ver repositorio de ENV
// Si lo subimos a vercel hay que parametrizarlo

//? Mongoose es un drive para controlar MongoDB (Base da datos no relacional que lee JSON)
// En MOngoDB tenemos los indexes y son los elementos únicos

// npm -D i nodemon
// npm i express
// npm i dotenv
// npm i mongoose
// package.JSON
// "start": "node index.js" > esto es de producción
// "dev": "nodemon index.js" > esto es de desarollo
// index.js

// Estructura correcta de nuestra aplicación (Code scaffolding)
// Carpetas
//--> src
//----> utils
//----->>bd.js
//----> api
//----->> models
//----->> routes
//----->> controllers

// Mongoose es la que hace la conexión de la base de datos MongoDB
// ver en repositorio punto 6 Mongoose para ver los pasos

//? Mongoose_models

//? Nodemailer
// npm init -y
// npm i express
// npm i dotenv
// npm i nodemailer
// npm -D i nodemon
// nuevo archivo .env en la raiz de nodemailer
//--> PORT=8080
//--> EMAIL= gmail de cmrbolsa
//-->PASSWORD= la que te da gmail de nodemailer
// dentro de gitignore ponemos .env para que no se los datos del .env y esto hace que desaparezca para todos menos para el creador

//TODO Parametrizar Mondo db
// https://www.mongodb.com/ ==> https://www.notion.so/neoland-school/Primeros-pasos-Mongo-Atlas-c286137140f1433abafffbac88ffc8e8
// en gmail poner la doble verificación
// Al entrar en mongo tienes el usuario y contraseña para entrar y en database access tienes un username y contraseña que es lo que pones para conectarlo en visual

//? Mongo
// En mongo los elementos únicos salen en indexes
// Actualizar los indexes de forma aotumática poniendo debajdo de try ==> await Chrracter,sync indexes
// En catch ponemos deleteImgCloudinary(req.file.paht); para que no ponga más imagenes en cloudinary, es decir, sin copias

// Diferencias entre FIND de JS es que nos da el primer elemento, el de query de monguss nos da todos los elementos que coincidan
