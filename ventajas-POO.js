class learningPath {

}

const escuelaWeb = new learningPath();
const escuelaData = new learningPath();
const escuelaVgs = new learningPath();

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