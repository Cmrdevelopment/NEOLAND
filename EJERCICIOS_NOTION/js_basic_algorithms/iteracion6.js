// Iteración #6: Bucles

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

const automatico = []

for (i = 0; i <= 9; i++) {
    automatico.push(i)
}
console.log(automatico)


//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

const dividido = []

for (i = 0; i <= 9; i++) {
    dividido.push(i)
    if ((i / 2 == 0)) {
        console.log(i)
    } else {

    }
}

// 0/2=	0   ==> Da cero debe monstrarse
// 1/2= 0.5 ==> Da < o => no debe monstrarse
// 2/2= 1   ==> Da < o => no debe monstrarse
// 3/2=	1.5 ==> Da < o => no debe monstrarse
// 4/2= 2   ==> Da < o => no debe monstrarse
// 5/2=	2.5 ==> Da < o => no debe monstrarse
// 6/2=	3   ==> Da < o => no debe monstrarse
// 7/2=	3.5 ==> Da < o => no debe monstrarse
// 8/2=	4   ==> Da < o => no debe monstrarse
// 9/2=	4.5 ==> Da < o => no debe monstrarse

// 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.