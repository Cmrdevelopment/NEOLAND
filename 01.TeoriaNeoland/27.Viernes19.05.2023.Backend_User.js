// Usuarios (User)

// Sling y Pretter )
// (reglas para trabajo colaborativo) EJ: Decir que ponemos comas simples, etc

//? Instalar
// npm init -y
// npm i express
// npm i dotenv
// npm i nodemailer
// npm i cloudinary
// npm i mongoose
// npm i multer
// npm i multer-storage-cloudinary
// npm i bcrypt cors jsonwebtoken validator

// Desarrollo
//--> npm -D i eslint eslint-config-prettier jest prettier supertest
// npm -D i nodemon

// "scripts"
//! MIRARLO en el proyecto 9-USER
//! Ver PDF donde explica toas las normas
//! Reglas de prettier son de formateo => Ver archivo
//TODO------>> Poner la extensión ESLint ó Prettier ESLint (Ver cual es la mejor)

//? Politica de CORS (https://www.notion.so/neoland-school/CORS-b4c8c2d40cb447dc85647544754e5ea0)
// https://www.npmjs.com/package/cors?activeTab=readme
// app.use(cors()) => con esto ya se están utilizando, es conveniente que se utliza a nivel global y no solo en controladores
// npm i cors

// Mecanismo de seguridad que permite o niega el acceso a recursos de un dominio a una aplicación en otro dominio

// helpers so ayuda a controlar los errores
// ----->> handle.error.js

// El .env seria:

// PORT=8080
// MONGO_URI=
// EMAIL=
// PASSWORD=
// CLOUDINARY_CLOUD_NAME=
// CLOUDINARY_API_SECRET=
// CLOUDINARY_API_KEY=
// JWT_SECRET= metemos lo que queramos y es para el token del LOGIN

// BASE_URL=http://localhost:
//--->> esto lo hemos convertido en variable por si cambiamos el puerto se haga en todas a la vez y no tener que hacerlo manualmente

// REDIRED tiene que ser con el metodo GET a METODO GET

// LOGIN
// Las librerias que hacen falta para el login son bcrypt y jsonwebtoken
// Hace falta poner un archivo en utils denominado token.js

//AUTENTICADO
