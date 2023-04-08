// If else - else if

// if - else 

let saldo = 100
let efectivo = 80

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("No tienes saldo suficiente")
}

// if else - else if 

let nota = 5;

if (nota === 5) {
    console.log("Sobresaliente, eres un Crack!");
} else if (nota === 4) {
    console.log("Vas muy bien, buen trabajo, sigue trabajando");
} else if (nota === 3) {
    console.log("Has aprobado por los pelos");
} else if (nota === 2) {
    console.log("Has suspendido, te queda poco para consguirlo");
} else if (nota === 1) {
    console.log("Debes trabajar más para conseguir avanzar");
} else {
    console.log("Error, debes introducir una nota del 1 al 5");
}

// Sentencia o el operador switch

// let nota = 5; ==> Ten en cuenta que ya está arriba declarada por lo que no hará falta ponerla abajo, es más, si, la declaras de nuevo da error

// let nota = 5;

switch (nota) {
    case 5:
        console.log("Sobresaliente, eres un Crack! switch")
        break;
    case 4:
        console.log("Vas muy bien, buen trabajo, sigue trabajando switch")
        break;
    case 3:
        console.log("Has aprobado por los pelos switch")
        break;
    case 2:
        console.log("Has suspendido, te queda poco para consguirlo switch")
        break;
    case 1:
        confirm.log("Debes trabajar más para conseguir avanzar switch")
        breack;
    default:
        console.log("Error, debes introducir una nota del 1 al 5 switch")

}

let str = "Hola, vete a \"sacar la basura\""
console.log(str)


let nombre = "Carlos";
let saludo = `Hola, ${nombre}, bienvenido`
console.log(saludo)

// Otro ejemplo de Switch

let estaciones = "primavera";
switch (estaciones) {
    case "invierno":
        console.log("En el invierno hace mucho frio");
        break;
    case "primavera":
        console.log("En primavera nacen los colores");
        break;
    case "verano":
        console.log("En verano el solo brilla");
        break;
    case "otoño":
        console.log("En Otoño se caen las hojas");
        break;
    default:
        console.log("Esto no es una estacíon");
        break;
}

// Mismo ejercicios anterior pero con Else if

let estacion = "invierno";

if (estacion == "invierno") {
    console.log("Todo es frío.");
}

else if (estacion == "primavera") {
    console.log("Se colorea el mundo.");
}

else if (estacion == "verano") {
    console.log("Las noches se hacen largas.");
}

else if (estacion == "otoño") {
    console.log("Donde había color ya no queda nada.");
}

else {
    console.log("Eso no es una estación.");
}

// Otro ejemplo de Switch

// Crea un condicional switch con los días de la semana (lunes a domingo). En cada día, debes poner una frase que se muestre en un alert().
// En caso de que se escriba cualquier otra cosa, deberá estar contemplado con un console.log() que te avise que no es correcto o cualquier cosa por el estilo

let diasSemana = "Domingo"
switch (diasSemana) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Martes es el segundo día de la semana");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    case "jueves":
        console.log("jueves es el cuarto día de la semana");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    case "sabado":
        console.log("sabado, sabadete, nos vamos a la playa");
        break;
    case "domingo":
        console.log("El domingo tenemos fiesta");
        break;
    default:
        console.log("Eyyyyyy, que día es ese, ¿Es nuevo?");
        break;
}
