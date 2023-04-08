// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

// - Otra cadena de texto con tu Apellido

let nombre = "Carlos"
let apellido = "Martín"
console.log(nombre.concat(" ", apellido))

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let cadena1 = "estudiante"
console.log(cadena1 + " = " + nombre + " " + apellido)

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let cadena2 = "estudianteMayus"
console.log(cadena1.toUpperCase())

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let cadena3 = "estudianteMinus"
console.log(cadena1.toLowerCase())

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

console.log(cadena1.length)

// - Una variable que contenga la primera letra del Nombre

console.log(nombre.charAt(0))

// - Otra variable que contenga la última letra del Apellido

console.log(apellido[5])

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

console.log(cadena1.trim())

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

if (cadena1 === "nombre") {
    console.log(true)
} else {
    console.log(false)
}
