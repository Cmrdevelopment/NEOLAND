//? Models & Populate
// https://www.notion.so/neoland-school/M-dulo-Backend-b85a60c3bff74e4baee71b5d1ec811f9
// punto 8 de TEORIA de ApiRESFULL

// En .env en visual se cambia el nombre para que aparezca un nuevo proyecto en MONGO_URI "cambiamos mi primer proyecto por movies"

// Necesitamos cloudinary (nueva carpeta)
// folder: "pruebas12", se cambia por "movies"
// Creamos otra carpeta models (Movies.models en src>api)
// mongoose nos cambia el modelo
// Traaer Schema (esquema) ==> que es donde ponemos los datos
// camiamos la forma de traer esquema
// timestamps
// Relacionamos un models con otro => Movies.models con Character.models

//? AHORA CREAMOS LOS CONTROLLER (metodos: POST, GETALL, ETC)
//--->> y relacionamos cada metodo en router y en el index (linea 20)

// GET ALL se trae todo
// GET BY ID Te trae el ID

//! para buscar si tiene un espacio debemos poner en la url %20 (Ejemplo: Terminator 2, ese espacio debemos ponerlo como %20)

// Relacionamos movies con Character en charter.controllers ==> id.movie y $push

//? La magia: Populate

// El populate (es de mongoose) te trae el objeto y te muestra todo el objeto del relacionado. No se ve en MongoDB y si en imsomnia
// Solo funciona con datos type y ...
// Desde el punto de vista de Mongodb Character y Movies son dos colecciones de datos pero de esta forma se relacionan
// Gracias a mongoosse MongoDB se parece mucho a SQL ya que relacionan los datos

//? Inconsitencia de datos
// Debe haber consistencia dentro de los modelos de datos
// En DELETE
