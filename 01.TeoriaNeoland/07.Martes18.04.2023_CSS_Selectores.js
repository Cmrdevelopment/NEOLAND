// Selectores y Combinadores de CSS

///////////////////////////// SELECTORES ///////////

// selector {
// 	propiedad: valor; /*regla*/
// 	propiedad: valor; /*regla*/
// 	propiedad: valor; /*regla*/
// }
/* PARA COMENTAR EN CSS */

// Cuando maquetemos CCS debemos saber que funciona en cascada por lo que si contradecimos una orden más abajo se queda con esa.

// DIV ==> Sirve para crear secciones o agrupar contenidos.
// no poner ni <br> ni !important ya que son malas practicas 
// SELECTORES de clases se utiliza con un .
// SELECTORES de ID se utiliza con #
///// Se utilzan las clases para maquetar (CSS) y los ID para JS  ¿Preguntar el motivo?
/// SELCTORES AVANZADOS
///// SELECTOR UNIVERSAL
// el * es el comodin para todo en programación
//*{
// todo lo que pongas ahí es para todo el css de la web, se suele utilizar para el border, margin, fuente tipografica, etc
//}
///// SELECTOR por ATRIBUTO

//////////////////////////////////////////// COMBINADORES ///////////

/// COMBINADORES de hermanos adyacentes (no se sule usar)

// SELECTOR general de hermanos (no se sule usar)

///////////////////////// LOS MÁS QUE SE USAN

///// COMBINADOR de HIJOS

// Lo primero es que hijos, no son nietos ni sobrinos, etc

// Son para maquetar de forma más sencilla sin tener que reptir clases

///// COMBINADOR de DESCENDIENTES

// Es lo mismo pero no tiene porque ser un hijo directo

//------------------------------------------------------- PSEUDOCLASES

// https://www.notion.so/neoland-school/Pseudoclases-9efcd9096ca84a628267ecd1ef01bbd0

/// Las pseudoclases son un tipo de selectores que nos permiten captar elementos en base a la información de estado de los mismos. 
// Son para recuperar la situación en la que se encuentran cada uno de los elementos
// La sintaxis de la pseudoclses es :

///// :acive => 
///// :any-link
///// :checked 
///// :default => Al parecer está dando muchos fallos
///// :disabled 
///// :enabled 
///// :first-child
///// :last-child  
///// :focus 
///// :hover (pasar por encima) ==> sirve para resaltar y hacer efectos 
///// :invalid 
///// :link 
///// :not 
///// :nth-child (Odd - Couple) PAR - IMPAR ==> Para maquetar los impares o pares
///// :nth-last-child => Igual que el anterior pero empieza desde el final
///// :only-child 
///// :read-only => Por ejemplo campos que están PRE-rellenados, por ejemplo campos de nombres.
///// :read-write 
///// :required
// :root ==> ESTO ES EL NUCLEO DE CSS: ejemplo que tenga font.family: "LA QUE SEA", Se suele utilizar para maquetar en general o de donde vienen todos los estilos por defecto. Ya tiene por defecto 16 px de fond-size.

///////////////////////////////////////////// PSEUDOELEMENTOS

// NO CONFUNDIR CON LA pseudoclases 
// La sintaxis de la pseudoelementos es ::

///// ::after
///// ::before
///// ::first-letter
///// ::first-line
///// ::placeholder

//? UNIDADES DE MEDIDA

// https://www.notion.so/neoland-school/Unidades-31fc171794c7487390b5805241547948

////////// Unidades de medidas absolutas (in(Pulgadas), cm(Centímetros), pc(Picas), mm(Milímetros), pt(Puntos), px(Píxels))

/// Se puede maquetar en todas ellas pero se hace normalmente en Píxels ==> 1px = 0.26mm ==> Es lo que utilizamos ya que las pantallas va por pixeles

//* font-size: '20px' => Es el alto del pixel

////////// Unidades relativas (em, ex, rem, %, vw, vh, vmin, vmax)

//* % porcentaje
//* rem (Root em) => Modifica el root. 1 rem son los 16 ps del root, es decir, lo parametrizado de base en html
//* em => Coje el tamaño de la caja que tiene encima
//* vh => viewport height es por lo que divides tdo el alto de la pagina de la web (no usar en imagenes)
//* vw => viewport width es por l que divides todo el ancho de la pagina de la web (no usar en imagenes)

//? COLORES

// https://www.notion.so/neoland-school/Colores-ec44fe310a79452785364e1e08dec3c2

// Los colores tienen nombre (red, blue, black, etc)
// Los colores tambien tiene otra nomeclatura rgb(tres numeros), (rgb red, green, blue ), rgb(, 0, 0, 0 ) => este es el NEGRO
    // rgba, ese "a" es la opacidad, ese "a" es el alfa de de 0 a 1000, la mitad de opacidad es 500
// Otra nomenclatura es hexadecimal codigos HTML #fafafa es el blanco
// Otra nomenclatura hsl (0, 74%, 57%), Hue, Saturación, Luminosidad 

//? TAMAÑO DE LAS FUENTES

// https://www.notion.so/neoland-school/Fuentes-69f46c74e21143d0a73b102926e63de1

// Normalemnte tenemos solo una fuente tipografica
// Se suele poner varias después de la fuente que queremos por si se rompe la que hemos puesto.

// font-size
// font-size
// font-weigth
// font- style
// letter-spacing

// Si la fuente no está en el equipo ve a https://fonts.google.com/

// Lo que copiamos del google lo ponemos en el head, tiene dos partes, la primera parte es para que se conecte rapidamente a la fuente y la segunda es el tipo de letra y en CSS le ponemos en el body 
// body {
//     font-family: "Roboto", sans-SVGComponentTransferFunctionElement;
// }

// Otra forma es descargarla a nuestro equipo y ponerla en un archivo en VISUAL => asset (imagenes) y hags una carpeta de fonts(fuentes)
//////////////////// lo malo de hacerlo así es que puede pesar más de la cuenta
//////////////////// lo bueno es que la tenemos nuestro codigo y no se rompe 












