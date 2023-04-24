//? como se trabaja en el DOM => https://www.notion.so/neoland-school/Trabajando-el-DOM-72cf427f60374451b196b29e60bdb65a

// Es un arbol que va de más a menos, es una jerarquia de como se contruye una web
// Enlazar el JS con el DOM: app.js junto al intro y style
// <script src="name_file.js" defer></script>
//! --->> <script src="app.js" defer></script> IMPORTANTE el defer
// YA NO SE UTILIZA LA CONSOLA DEL TERMINAL
// Para ver que funiona hacemos en el documento de app un console.log("hola") y vamos a la consola del inspeccionador del chrome

/// IMPORTANTE
// Si le ponemos un console.log(document) en la console del navegador nos sale un objeto con toda la info 
// NODO es un punto de conexión

//? MÉTODOS del DOM (SIRVEN PARA ACCEDER A LOS ELEMENTOS DEL HTML)

//? ------------------------------> Acceso a elementos del DOM

//! ESTOS METODOS son antiguos y funcionan (id, class y nombre de etiqueta)

// 1.- // Obtiene un elemento por id => document.getElementById('someid');
// 2.- // Obtiene una lista con los elementos que tienen esa clase => document.getElementsByClassName('someclass');
// 3.- // Obtiene una HTMLCollection con los todos los elementos 'li' => document.getElementsByTagName('li'); li ó p, etc

//! ESTOS METODOS SON MÁS MODERNOS (Por id, por clase)

// POR ID
// Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
// document.querySelector('.someclass'); => Es para recuperar uno

const title = document.querySelector("#title")

const paragraphsClass = document.querySelectorAll(".paragraph")
console.log(paragraphsClass)

//! MIRAR REPOSITORIO DE CLASES

// Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
// document.querySelectorAll('div.note, div.alert'); Es para recuperar todos

//? ------------------------------> Acceso de hijos a padres

// Obtener los hijos de un elemento

//----------> let elem = document.getElementById('someid');
//----------> let hijos = elem.childNodes; => para recuperar al hijo

// Su nodo padre

//----------> let padre = elem.parentNode; => para recuperar el padre



//? ------------------------------> Crear nuevos elementos

// Puedo meter desde JS los elementos que quiera en html. document.body (aqui estan todos)

document.body.innerHTML = template

// innerHTML => CREAR NUEVO ELEMENTOS CON TEMPLATES

const nuevoTitulo = document.createElement("h1")
nuevoTitulo.innerText = "Soy el titulo"
document.body.appendChild(nuevoTitulo)

//? ------------------------------> Manipular clases

//----------> Como funciona en cascada puedo seguir haciendolo cosas

nuevoTitulo.classList.add ("estilo") // añadir
nuevoTitulo.classList.remove ("estilo") // eliminar
nuevoTitulo.classList.toggle("estilo") // intercambiarlo (añadir/eliminar)

//? ------------------------------> DOM templates

// Ejemplo de template

const fullname = "Carlos Martín"

const template = `

<header>

    <h1>${fullname}</h1>
    <ul>
        <li>Primero</li>
        <li>Segundo</li>
    </ul>
</header>
`

document.body.innerHTML = template

// innerHTML => CREAR NUEVO ELEMENTOS CON TEMPLATES



//! El USUARIO cuando hace algo en la página hace un EVENTO =< SON LOS EVENTOS DEL USUARIO

// Nosotros tenemos que saber manipular esos eventos.
// Eventos hay muchos pero lo más habitual es hacer un CLICK.
// Veremos 4 ó 5 EVENTOS. Otros eventos es escribir, scroll, submit(formulario), etc

// EVENTO CLICK
// alert es como el concole.log

// Vamos a escuchar (añadir) los eventos y para eso lo 1ª es poner un clase o un id

// Recuperar el botón por JS

// Carga de recursos en notion es muy avanzado: https://www.notion.so/neoland-school/Carga-de-recursos-faa9a8c0892a499fa92ac2cae45bbf16

// La manera de añadir eventos es con logica, es decir, en JS (en app)

// Extensiones html en js

//? ------------------------------> DESPLEGAR

// git
// Vercel.com - Registrarse
// --->> configurar cuenta de git
// --->> Configurar proyecto
// 