// atajos del teclado

// PARA SACAR EMOJIS: Window +
// PARA COMENTAR VARIAS LINEAS: Control + k + c
// PARA DESCOMENTAR VARIAS LINEAS: Control + k + u

// como utilizar typeof (para saber que tipo de dato es la variable)

let name = "hola"
let numero7 = 5
let bol = true
console.log(typeof name)
console.log(typeof numero7)
console.log(typeof bol)

// ¿Como utilizar el operador "Ternario"?: Tiene tres operandos o argumentos. Usando este operador podemos pasar de tener "varias líneas" de código a tener "una sola".

// El código normal seria así:

// int horarioDeApertura

// if (día == FIN_DE_SEMANA)
//     horarioDeApertura = 10;
// else
//     horarioDeApertura = 8;

// Bucles: Con Código Ternario sería así:

// int horarioDeApertura = (día === FIN_DE_SEMANA) ? 10 : 8;

// String: Si tenemos un texto largo podemos ponerlo en varias lineas dandole a ALT + z

// let textoLargo "Según el Libro Guinness de los Récords, la novela del francés Marcel Proust En busca de tiempo perdido ('A la recherche du temps perdu'), es el libro más largo que se ha escrito hasta la actualidad. Consta de 1.267.069 palabras, 3.031 páginas y 9.609.000 caracteres (espacios incluidos).Según el Libro Guinness de los Récords, la novela del francés Marcel Proust En busca de tiempo perdido ('A la recherche du temps perdu'), es el libro más largo que se ha escrito hasta la actualidad. Consta de 1.267.069 palabras, 3.031 páginas y 9.609.000 caracteres (espacios incluidos)." ==> con ALT + z lo ordenas y varias lineas

let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka")) // con esto nos dice en que posición está colocado al inicio o primera
console.log(str_5.charAt(9))        // con esto te sale la letra que está en la posición 9 
console.log(str_5.lastIndexOf("Gorka")) // con esto nos dice en que posición está colocado al final o última
console.log("Linea 33 = ", str_5[9]) // con esto te sale la letra que está en la posición 9

// console.log("Linea 8 =", name[1]);




