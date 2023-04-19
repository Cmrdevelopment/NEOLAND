//? Modelo CAJA
// https://www.notion.so/neoland-school/Modelo-de-caja-e29c8d05400e42b186fcd1de5d0eacc7
// atajos (shor...noseque)
// Todo lo que se mete en html son cajas
// si vamos a iseccionar podremos ver como tenemos nuestras cajas
//----------- contenido, padding, border, margin ==> esto son las caracteristicas y lo que tiene el contenido de las cajas
// padding es como un aire extra, que se separe del contenido.
// asset es una capeta para meter los recursos
// En google font tambien hay iconos
// ------------------ para ver que está pasando le pongo: 
//--- border: 2px solid red
//--- height: 15vh;
//--- fondo: azul
// ------------------ para separar una imagen:
//--- las cuatro direcciones de una caja margin y otra cosa
//--- pero si le pongo: margin: 20px y si pongo margin 20px 10px ó margin 20 px 10px 20px 10px (los 4 lados de un elemento
//---------------------- Propiedad de altura
// lo puedo hacer con height 15vh pero se puede salir las cosas, PARA SOLUCIONARLO:
// mini-height: 15vh y no ponemos el maximo para que se adate el texto en caso de necesidad
//--> overflow (desborde) es otra forma de hacerlo  para esto tenemos en cuenta x horizontal e y vertical:
// Si el eje Y se sale overfloe-y: scroll y si queremos el scroll oculto se pone overfloe-y: hidden
//! overfloe-y: auto es como scroll pero lo decide por tí (es mejor porque no aparece la barra)
//----------------------------------------> Hay una guia en notion
// border-radius: Es la curvatura de esas esquinas 50% seria un circulo
// overflow: hidden 
// object-fit: cover
// ¿Como se miden las cajas en css? 
// Para maquetar dos cosa a la vez .content-box, .border-box
// Control + d para poder cambiar en varios lugares
//------> box.sizing: 
//? Margin y padding
// Alto y ancho para la cabecera: 400px, 40px
// para centrarlo:  margin: auto y te lo centra
// para centrar el texto: padding: 10px 100pxtext-align: center
// en imagenes para centrar es display: block
// ---------------------- hay elementos en linea y elementos que se apilan una encima de otra
// Imagenes de pintan al lado una con otra, es decir, en linea
// para saber si son en block en el inspeccionador lo podemos ver y se peude cambiar el comportameint de las etiquetas
//? display: inline ó block ó en inline-block(este se pone si tenemos muchas imagenes(pj) para que se vayan apilando
// los div son elementos de bloque
// display: none => nos sirve para que desaparezcan elementos como cuando tenemos una barra de carga y no queremos que se vea o para un menu que quieres eliminarlo cuando se vea por el movil
//? Sombras
// para hacer una sombra al ser engorrosos => https://www.cssmatic.com/box-shadow y https://getcssscan.com/css-box-shadow-examples
//? Position ==> https://www.notion.so/neoland-school/Position-9a38e4f98cca4db78864cf5767c99f60
// Alterar la posición de un elemento
//-------> static es por defecto
//-------> relative:  top, botton, left, right  para posicional los elementos a nuestro antojo.
//-------> abdolute: se pone por encima de todo: top, bottom, left y right para posicional los elementos a nuestro antojo.
//-------> fixed: parecido al abdolute pero fijado, es decir, no se mueve según hagas scroll: top, bottom, left y right para posicional los elementos a nuestro antojo.
//-------> sticky: es el que menos se usa pero se queda en su sitio siempre.
//? Responsive - Adaptative https://www.notion.so/neoland-school/Responsive-Adaptative-86b8afad9d7e48b287633e4b3c838c8d
// Responsive se hace con % no con px
// Debemos utilizar: Unidades meidades realtiva los viewport, %, rem
//--------------> Medias Queries => https://www.notion.so/neoland-school/Medias-Queries-b2df9884d6d84d8dbfd9b408e01c390c
// media queris: para tener diferentes visualizaciones del contenido

//? Flex https://www.notion.so/neoland-school/Flex-b8a71c7c62364dbc99ea6991c0c3a170
// ESENCIALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL para diseñar y maquetar
// Para colocar y situar las cosas más facilmente podemos ir al ispecionador y te sale un lugar para elegir
// flex direction por defecto es row y si le ponemos column
// Viene muy bien para tener diseños adaptativos 