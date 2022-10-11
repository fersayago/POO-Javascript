// Objeto Literal
const nataliaLiteral = {
  name: 'Natalia',
  age: 30,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS'
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// Hacer que Natalia apruebe otro curso
nataliaLiteral.cursosAprobados.push('Curso de Responsive Design');

// Hacer que Natalia apruebe otro curso con el metodo aprobarCurso
nataliaLiteral.aprobarCurso('Curso de Javascript Moderno');


// CREAMOS UN PROTOTIPO

function Student(name, age, cursosAprobados){
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso){
  //   this.cursosAprobados.push(nuevoCurso);
  // }
}

// Creamos un metodo en el prototipo por fuera del constructor
Student.prototype.aprobarCurso = function (nuevoCurso){
  this.cursosAprobados.push(nuevoCurso);
}

// Creamos una instancia de Student
const juanita = new Student(
  'Juanita',
  15,
  [
    'Curso de Introduccion a la Programacion',
    'Curso de HTML y CSS',
    'Curso de Responsive Design'
  ]
);