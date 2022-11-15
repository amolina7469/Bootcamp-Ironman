class Codehouser {
  constructor (nombre, email) {
    this.nombre = nombre
    this.email = email
  }

  infoContacto () {
    console.log(`${this.nombre} es un codehouser con email ${this.email}`)
  }
}

class Alumno extends Codehouser {

  constructor (nombre, email) {
    super(nombre, email)
    this.aprobado = false
  }

  aprobarCurso () {
    this.aprobado = true
    console.log('Curso aprobado')
  }

}

class Profesor extends Codehouser {
  constructor (nombre, email, asignaturas) {
    super(nombre, email)
    this.asignaturas = asignaturas
  }
}


const ivan = new Profesor('Ivan', 'ivan@email.com', ['HTML', 'CSS', 'JavaScript'])
const ronald = new Alumno('Ronald', 'ronald@email.com')

console.log(ivan)
console.log(ronald)

ivan.infoContacto()
