// Iteración #7: Reduce

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumExams = exams.reduce((acumulador, exam) => acumulador + exam.score, 0)
console.log(sumExams);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

// Me da que lo he sacado de churro

const aprobadosExams = exams.reduce((acumulador, exam) => {
    if (exam.score >= 5) acumulador += exam.score
    return acumulador
}, 0) 
console.log(aprobadosExams);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

// Esta vez la potra NO LLEGA jajaja ==> https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/

const promedio = {avg: 0, n: 0} 
const average = exams.reduce((acumulador, exam) => acumulador + exam, 0) / exams.score

console.log(average);



// const arr = [1, 2, 3, 4, 5, 50, 100];
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average);


const exams = [
    { name: "Yuyu Cabeza Crack", score: 5 },
    { name: "Maria Aranda Jimenez", score: 1 },
    { name: "Cristóbal Martínez Lorenzo", score: 6 },
    { name: "Mercedez Regrera Brito", score: 7 },
    { name: "Pamela Anderson", score: 3 },
    { name: "Enrique Perez Lijó", score: 6 },
    { name: "Pedro Benitez Pacheco", score: 8 },
    { name: "Ayumi Hamasaki", score: 4 },
    { name: "Robert Kiyosaki", score: 2 },
    { name: "Keanu Reeves", score: 10 },
  ];
  
  const totalMedia = exams.reduce(
    (acc, studens) => acc + studens.score / exams.length,
    0
  );
  
  console.log(totalMedia);



