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
