//? Grid ==> https://www.notion.so/neoland-school/Grid-9d199ef10d7f4267af1535986086ba3b
// Nos permite dividir una vista de una aplicación web en filas y columnas
//! En el "alt" se debe poner el texto alternativo (descripción de la foto) corto y claro
//---------------->   <img src="url de la foto" alt="descripción de la foto" />
//! Un Layout es la distribucion de los elementos de la web
// Filas y columnas
// Grid o la grilla autocoloca los elementos
// Aparece en html un icono de grid y en la web aparecen numeros en la esquinas, eso son filas
// Para corregir el que no este pegado a la grilla * a cero width 100% heigth 100% objet-fit: cover (es para que no se deforme las imagenes)
// Con la grid templete colum le decimos como van a ser las columnas: 200px 200px 200px (eso quiere decir tengo tres columnas de 200px), se puede poner en % (25% 25% 25% 25%) o tambien poner 1fr
// objet-fit: cover (es para que no se deforme) es para ajustar la foto
// grid-template-colums: 1fr 1fr 1fr
// grid-template-rows: 100px 100x 100x (tres filas de 100px)
// Si quiero poner muchas columnas: grid-template-colums: repeat(4, 1fr)
// En vez de poner el numero de filas y columnas: grid-auto-rows: 300p(en este caso filas)
// gap: 1 rem => espacio entre elementos (es bidereccional)
// padding: 1 rem (es para alrededor de los elementos)
// Para elegir un elemento concreto: nth-child(1) ==> el número es el elmento que quieres modificar
// Puedes manejar a tu antojo el ancho y largo de cada foto:
// ---------------> Deben ser bloques correlativos, es decir, un elemento jamás puede ir en diagonal y saltar de una columna a otra no-correlativa.
//? Grid => Áreas (Grid-template-area)
// grid-area: header; grid-area: main; grid-area: main; my-nav; grid-area: myaside grid-area: myfooter
// Mirar el repositario de clases para ver como se hace grid-area:
// @media screen and (mini.width: 750px) mirr el repositorio ya que ahí es como se configura para que se vea en el movil
//? Auto-fit (mega truco)
// grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) auto rellenar con 200px y como maximo de una 1 fr (fracción) 

//! IMPORTANTE: Las MEDIA QUERY son para adaptar, quitar y poner cosas SOLO para se adapte al movil
//--------------> Medias Queries => https://www.notion.so/neoland-school/Medias-Queries-b2df9884d6d84d8dbfd9b408e01c390c

//? Las Variables => https://www.notion.so/neoland-school/Variables-CSS-ebaa6ef5dacd4ed6a9738c5a3b7d5cb7
// custom properties, se llaman variables auqnue no lo son
// se definen con --color ó font-size, etc
// Ventajas: Se parametriza todo mucho mejor y para cambios es más facil
// En el root pongo variables y los puedo aplicar en donde quiera de manera más facil

//? Replicar una web
// svg calidad infinita proque está realizada con vectores
// En el root ponemos todos los elementos comunes para utilzarlos en toda la página (grib)
// div => no tiene porque tener contenido semantico, para separar cosas dentro del main, heder, etc
//* Los textos son en HTML no se ponen en MAYUSCULAS, se utiliza text-transform: uppercase
//* Si se rompen las palabras la propiedad es white-space: nowrap y así no se rompe
//? Truquitos
//  html => scroll-behavior: smooth es para que baje suve la aplicación
// Fijar la posición del menu (header)