//? Callbacks y Try / Catch => Pertenece a JS y no a DOM
//? Local Storage
//? VITE

//? TryCatch
// Es como un if else pero no lo es ... porque no controlamos el error

// try {
    
// } catch (error) {}

//! Se usa para hacer llamadas a datos externos y para controlar los errores de la consola

// try {
    console.log("Intentando imprimir por consola la var x")
    console.log(x)
// } catch (error) {
//     console.log(error.message)
// } finally {
//     console.log("Termiando")
// }

//! Lo mejor es usar el error.message

//? Callbacks (Volver a llamar)

// pasar a otra función como argumento y se invoca dentro de la función externa para completar alguna acción.

// Función ANONIMA y Función DECLARADA

// En las librerias veremos muchas Callbacks

//? LOCAL STORAGE

// Es la memoria del navegador, cache de TU NAVEGADOR, lo memoriza en tu pc ó portatil. Lo que hay que saber son los dos metodos que están en el repositorio de localStorage (y hay dos metodos más: clear (para borrarlo todo), remove (para borrar solo una caja).

// Sirve para:
// --->> Tener una varable que almacene un modo claro o oscuro y así respete su tema.
// --->> Sirve tambien para que te mantenga la sesión iniciada de un usuario
// --->> Sirve para mantener una Array, ejemplo un buscador para no tenerla que hacer todo el rato

//! El navegador como es tonto no sabe lo que es un number, array, etc y solo sabe lo que es un string

// --->> para objetvos, number, array, json utilizamos json.stringify ==> para convertir a string
// --->> ____________________________________________________________ ==> para desvertir 

//? SessionStorage => Es lo mismo pero solo lo mantiene mientras la sesión está abierta. Si cierras el navegador no lo recuerda.


//? VITE

// Es un banler es un compilador, sirve para trabajar más facil en diferentes ficheros (para hacer modulitos de cada lenguaje)

// Sirve para crear proyectos y se crea una carpeta en el pc

// Hacer el Vite Project: Color Flipper y si podemos:
// --->> Maquetar como queramos
// --->> Efectos que queramos










