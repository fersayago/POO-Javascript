class learningPath {
  constructor({
    name,
    courses = [],
    score = 0,
    comentarios = [],
  }){
    this.name = name;
    this.courses = courses;
    this.score = score;
    this.comentarios = comentarios;
  }
}

const escuelaWeb = new learningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [
    cursoProgramacionBasica,
    cursoDefinitivoHtmlCss,
    'Curso de Introduccion a la Programacion',
    'Curso de HTML y CSS',
    'Curso de Responsive Design',
    'Curso de Javascript',
    'Curso de React',
    'Curso de Node.js',
    'Curso de Express.js',
    'Curso de MongoDB',
  ]
});
const escuelaData = new learningPath({
  name: 'Escuela de Data Science',
  courses: [
    cursoProgramacionBasica,
    'Curso de Data Business',
    'Curso de Data Visualization',
    'Curso de Machine Learning',
    'Curso de Data Analysis',
  ]
});
const escuelaVgs = new learningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    cursoProgramacionBasica,
    'Curso de Unity',
    'Curso de Unreal Engine',
    'Curso de Blender',
    'Curso de Maya',
  ]
});

class Course {
  constructor({
    name,
    classes = [],
  }){
    this.name = name;
    this.classes = classes;
  }
}

new cursoProgramacionBasica = new Course({
  name: 'Curso de Programacion Basica',
  classes: []
});

new cursoDefinitivoHtmlCss = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  classes: []
});

class Stundent {
  constructor({
    name,
    email,
    username,
    twitter = undefined, // OPCIONAL
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }){
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths
  }
}

const fersayago = new Student({
  name: 'Fernando Sayago',
  email: 'sayago.fernando@gmail.com',
  username: 'fersayago',
  twitter: 'fersayago',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ]
})

const miguefeliz = new Student({
  name: 'Miguel Angel',
  email: 'migue@feliz.com',
  username: 'miguefeliz',
  facebook: 'miguefeliz',
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]
})