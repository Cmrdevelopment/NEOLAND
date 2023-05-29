// ReactJS
// Es una libreria que le instalas extensiones
// Virtual DOM, es la representación de ese DOM y es que virtual DOM es mucho más rápido

// Puede hacer las cosas como tú quieras con el limite de buenas prácticas

// ¿Que es mejor? Angular ó ReactJS
// Depende pero Angular es de google y tira mucho pero ReacJS es más agil y rapida

// declarativas significa que no sabemos lo que ahce detrás, el desarrollador no sabe lo que hace detrás
// Nosotros le damos ordenes y es el virtual DOM quien se encarga de hacer las cosas
// Imperativo es que nosotros hacemos las cosas y lo mandamos, ejemlplo con: document.query.selector ==> esto es imperativo.
// Basado en componentes

// Trabajamos con funciones y no con clases, si es con clases es codigo muy antiguo

//? PUNTOS CLAVE ==> en el presentación

//! ReactJS son asincronas
// Solo hace efecto el codigo que pongas (lógica) sin tener puesto un return y por eso es asincrono

// Funciona con funciones a traves de Hooks (Gancho) que son las herramientas (USE). Se basa en Hook, en ganchos.

//? npm create vite@latest
//? Le ponemos el nombre
//? Eliges React
//? javascrip-SWC es la alternativa de Babbel
// npm i
// para correr el proyecto de desarrollo es npm run dev
// App.js es donde tenemos nuestra aplicación
// useState es un estado
// Lo que está en el return lo devuleve, eso es el templete que incluye <> </>. Estos simbolos <> </> son las backstreet
//TODO Esto no es un .js sino un .jsx ya que tenemos por un lado la lógica y por otro el html y dentro de html podemos meter cosas de JS
//? {reactLogo} => esto es que estamos metiendo variables dentro, es como el ${} que haciamos en js
//! Para meter código de JS en el retunr hay que abrir y cerrar llaves
// La función set setea valores
//? Los estados son chivatos y produce un aviso de que se vuelve a rendedizar, es decir, un refresh, un rendenderin
//? REACT es asincrono, es decir, nosotros podremos cambiar el codigo pero no se verá el cambio reflejado ya que es el motor de REACT quien realiza la acción
//? Tendré acceso a codigo de JS, es decir, al estado real dentro del return
//? Las funciones que se pongan fuera del return se ejcutaran por parte de REACT cuando lo necesita
// El estado es inmutable y nunca modificaremos un objeto
// App.css se borran
// Index
//! Seguir el VIDEO de clase
// para hacer un componente hay que poner rafce

// En html no se toca nada y solo se pone los link

// En html podemos meter en llaves {} JS directamte

//? Que es una PROPS?

// delegar lo que un componente va a renderizar a otro componente, es decir, pasar información de un componente padre a un componente hijo

// ReactJS es un estado inmutable ya que no modificaremos un objeteto

// Comunicación bidereccional
// Lo natural es cambiar el estado del padre al hijo pero tambien se puede cambiar un estado de un hijo de un padre
//! En ReactJS el return SOLO puede tener un padre
// Un fragment en ReactJS es <> y no aparece en el html y no aparece ahí y no fastidia cuando haga el css
//--->> esta etiqueta vacia <> es un fragment esto es porque siempre en el return necesitamos un elemento padre
//! El efecto principal de un cambio de estado es hacer un refress, es decir, un redendizado.
// Que elemento controla el usuario: Los botones
//--->> Prevee los errores ReactJS. El Strict Mode es un doble render y solo lo hace dos rendent en desarrollo

// Layauts es nuestra estructura de la página web

// ponerle un padre a un componente es grapear. Cuando estás grapeando es children
// Cuando es un cambio de estado es un PROP

// Los estados pueden tener un LAZY, es decir, es un modo de actualizarse de otro modo

//? public es para desplegar
//? asset es para desarrollo

//TODO Pasos para crear un proecto de REACT
// npm create vite@latest
// Pones nombre en minuscula
// Eliges React
// Eliges JavaScript + SWC => SWC es la alternativa de babel

// Te dirá que instales: cd PrimerProyecto, npm install y npm run dev

// npm create vite@latest //Creamos un proyecto con Vite
//Indicamos el nombre del proyecto
//Elegimos react y javascript
//Seguimos las instrucciones para instalar las dependencias y arrancar el proyecto
//https://www.notion.so/neoland-school/Toma-de-contacto-ReactJS-3bea71ea90c64abd8dfebef542eefd59

//https://www.npmjs.com/

//! Un COMPONENTE es un elemento reutilizable
// Componente de tio clase
//TODO componente de tipo funcional (funciones) => son las más rápidas y agiles
// Cada mención que haya en el html es una nueva instancia, por lo tanto un nuevo contructor, etc
// Clases y componentes con mayuscula
// Las funciones son funciones y los constructores de tipo clase tiene dos partes ()
// Las props es información que van a recibir y tambien state que es un dato con un valor privado, información que tiene el componente que puede modificarse y cuando se mofifique cambia la vista.

//? Breve introducción a usestate
// const {variable, método para actualizarla} = useState{valor inicial)
// const {age, setage} = useState {29}

// logica y datos en componentes y son de
