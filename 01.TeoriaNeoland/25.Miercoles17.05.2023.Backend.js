// Modelo de POST
// POST: Compartir y creaer una información que le mandamos a la base de datos
// Los controladores son funciones que se exportan y las utilizan las rutas

//? Si queremos subir una foto debemos INSTALAR:

// npm i multer multer-storage-cloudinary cloudinary (ESTO SON TRES LIBRERIAS)

//! Este archivo (files.middleware.js) se copia y pega y no se escriba: viene directamente de la biblioteca de cloudinary

//----->> middelware (files.middleware.js) para hacer los elementos para subir archivos
// solo se cambia el folder que es el nombre del archivo
// CLOUD, API.KEY y APISECRET y lo Sacamos de CLOUDINARY en product Environmment Credentiales y lo metemos en .env

// ¿Quien utiliza los controladores? Las rutas (routes)

// Cuando clave y valor coinciden se le puede meter solo la clave => ejemplo name: name se pone solo name => Character find ( name )

//! .env (archivo)
// PORT=8080
// MONGO_URI=
// CLOUDINARY_CLOUD_NAME=
// CLOUDINARY_API_SECRET=
// CLOUDINARY_API_KEY=

// ramtime = tiempo de ejecución

//? Qué es un CRUD

// Son los metodos para crear, leer, actualizar y eliminar en la base de datos

//? Mongoose_models

// npm init -y
// npm i express
// npm i dotenv
// npm i nodemailer
// npm -D i nodemon
// npm i cloudinary
// npm i mongoose
// npm i multer
// npm i multer-storage-cloudinary

//!     "start": "node index.js", ==> En la consola utilizamos START para lanzarlo una vez
//!     "dev": "nodemon index.js" ==> En la consola lanzamos DEV si queremos que se actualice dinamicamente, para cerrarlo control C

//! ARQUITECTURA para el BACKEND

//TODO MCRI ==> Models, Controller, Routes, Index

// models creas arquitectura de los datos
// lo exportas
// lo importas en controller
// en controller creas las funciones get/post/delete
// lo exportas
// lo importas en routes
// en routes creas las routas para poder usar las diferentes funciones creadas en controller
// lo exportas
// lo importas en index
