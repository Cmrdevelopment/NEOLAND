// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

// function repeatCounter(param) {
//     let acc = 0

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

// Recorrer el array con un for of
const objCounterWord = []; // por ahora vacion

/// tiene objetos cuando se push de la siguiente forma objCounterWord = [{wordCounter:word, numberReapet: acc}];
counterWords.forEach((word, index) => {
  let acc = 0;
  // !HAY QUE HACER UNA CONDICION PARA SI SE HA CONTADO Y ESTA EN EL ARRAY objCounterWord NO VOLVER A CONTARLO
  objCounterWord.forEach((counter, index) => {
    if (counter.wordCounter == word) {
      acc++;
    }
  });

  if (acc == 0) {
    /// otro bucle dentro de este bucle para pararnos en una palabra y volver a recorre el arrray para contar las veces que se repite
    counterWords.forEach((wordTwo, index) => {
      if (word === wordTwo) {
        acc++;
      }
    });
    // me salgo ddel bucle y termino de contar con el segundo bucle pero sigo en el primer bucle
    objCounterWord.push({
      wordCounter: word,
      numberReapet: acc,
    });
  }
});



console.log(objCounterWord);

/// Pasos para solucionar el problema
/// 1) Recorro el bucle para pararme en una palabra
/// 2) Tengo una variable fuera que es un array que tieen los elementos contados
/// 3) evalucio recorriendo ese array si ya lo he contado con un contador
/// 4) si el contador es 0, quiere decir que no lo he contado por lo cual hago un if que lo tengo que contar
/// 5) contar significa volver a recorre el array de palabras y mirar donde se repite la palabra en la que estoy parado en el primer bucle
/// 6 ) Una vez que lo tengo contado lo puseo en un objeto en el array que guarda los elementos contados que en nuestro caso se llama objCounterWord 
