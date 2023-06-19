// Usuarios (User)

// eslint y prettier )
// (reglas para trabajo colaborativo) EJ: Decir que ponemos comas simples, etc

//? Instalar para USER (Mirar en repositorios NEOLAND_FT_04 > TEORIA > ApiRESTFUL > 9.- User)

// npm init -y

// Dependencias de producción
// npm i express
// npm i dotenv
// npm i nodemailer
// npm i cloudinary
// npm i mongoose
// npm i multer
// npm i multer-storage-cloudinary
// npm i cors
// npm i mongodb
// npm i validator
// npm i jsonwebtoken

// Dependencias de desarrollo
//--> npm -D i eslint eslint-config-prettier jest prettier supertest
// npm -D i nodemon

// Otra propiedad para la de TEST - Esto se mete debajo directamente, lo copiamos y pegamos

//  },
// "jest": {
//   "testEnvironment": "node",
//   "coveragePathIgnorePatterns": [
//     "/node_modules/"
//   ],
//   "verbose": true
// }

// "scripts" -> los copiamos y pegamos

// "format:check": "prettier --check", -------------------------------------------> Este chequea el formateo
//     "format:write": "prettier --write", ---------------------------------------> Este escribe el formateo correcto
//     "test": "jest --runInBand --detectOpenHandles --forceExit", ---------------> Genera los test y lo corre
//     "lint:check": "eslint", ---------------------------------------------------> Linkea los link y los corre
//     "lint:fix": "eslint src --fix --cache" ------------------------------------> Lo que ha chequeado y está mal lo coje y lo corre

// Poner estos archivos en la carpeta de User que debe ignorar

// .eslintignore
// ----->> /node_modules
// ----->> /reports

// .prettierignore
// ----->> /node_modules
// ----->> /reports

// Poner los archivos de configuración

// .eslintrc (ver pdf)
// -----> Son las reglas de eslin, tenemos pdf en recuersos donde explican cada parte

// .prettierrc (ver pdf)
// ----->> Son reglas de prettier que son de formateo, tenemos pdf en recuersos donde explican cada parte

//! Ver PDF donde explica todas las normas
//! Reglas de prettier son de formateo => Ver archivo
//TODO------>> Poner la extensión ESLint ó Prettier ESLint (Ver cual es la mejor)

//? Politica de CORS (https://www.notion.so/neoland-school/CORS-b4c8c2d40cb447dc85647544754e5ea0)
// https://www.npmjs.com/package/cors?activeTab=readme
// app.use(cors()) => con esto ya se están utilizando, es conveniente que se utliza a nivel global y no solo en controladores
//! Es para poner limites en la entrada de nuestra api
// npm i cors

// Mecanismo de seguridad que permite o niega el acceso a recursos de un dominio a una aplicación en otro dominio

// helpers so ayuda a controlar los errores
// ----->> handle.error.js

// El .env seria este de abajo pero debemos cambiarlo en cada proyecto

// PORT=8080
// MONGO_URI=mongodb+srv://cmrbolsadev:.........................................mongodb.net/AQUÍ?retryWrites=true&w=majority
// CLOUDINARY_CLOUD_NAME= está en cloudinary en DashBoard Product Environment Credentials
// CLOUDINARY_API_SECRET= está en cloudinary en DashBoard Product Environment Credentials
// CLOUDINARY_API_KEY= está en cloudinary en DashBoard Product Environment Credentials
// EMAIL= email para enviar --> cmrbolsadevelopment@gmail.com
// PASSWORD= está password es la que te da gmail en el cuadrito --> termina en ............kow
// JWT_SECRET= metemos lo que queramos y es para el token del LOGIN

//! IMPORTANTE: el nombre del proyecto que aparece en mongo se cambia en .env en MONGO_URI en donde pone AQUÍ
//TODO =mongodb+srv://cmrbolsadev:.........................................mongodb.net/AQUÍ?retryWrites=true&w=majority

// BASE_URL=http://localhost:
//--->> esto lo hemos convertido en variable por si cambiamos el puerto se haga en todas a la vez y no tener que hacerlo manualmente

// REDIRED tiene que ser con el metodo GET a METODO GET

// LOGIN
// Las librerias que hacen falta para el login son bcrypt y jsonwebtoken
// Hace falta poner un archivo en utils denominado token.js

//AUTENTICADO
