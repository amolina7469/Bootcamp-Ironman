//* Las promesas en javascript tienen 2 partes:
  // CREAR UNA PROMESA
  // CONSUMIR UNA PROMESA

//* Una promesa tiene 3 ESTADOS principales
  // PENDIENTE ("pending") -> todavía no se ha finalizado la promesa
  // CUMPLIDA ("fullfilled") -> Se ha cumplido
  // NO CUMPLIDA ("rejected") -> No se ha cumplido


//? PARTE 1: CREANDO UNA PROMESA

const teLlevoADisneyland = () => {
  return new Promise((resolve, reject) => {
    const randomSwitch = Math.random()

    // resolve es OTRA FUNCIÓN que yo decido que se ejecute cuando considero que se ha cumplido la promesa

    if (randomSwitch > 0.5) {
      resolve('🦄')
    } else {
      // reject es OTRA FUNCIÓN que yo decido dónde y cuando quiero que se ejecute cuando considero que no se ha cumplido la promesa.
      reject('👿')
    }
  })
}

//? PARTE 2: CONSUMIR LA PROMESA --> decidir qué hacer cuando se cumpla y qué hacer cuando no se cumpla

teLlevoADisneyland()
  //* Lo que sea que le pases como parámetro al resolve() lo recibirá el callback del "then()"
  .then((unicornio) => { console.log('Yupiii ' + unicornio) })
  //* Lo que sea que le pases como parámetro al reject() lo recibirá el callback del "catch()"
  .catch((demonio) => { console.log('Estoy super enfadado ' + demonio) })
  .finally(() => { console.log('Lo importante es participar.') })



//* Otro ejemplo con algo más parecido a JavaScript

const tiempo = Math.random() * 5000

const getWeather = () => {
  return new Promise((resolve, reject) => {

    if (tiempo > 2500) {
      // pedir al servidor el tiempo en Barcelona
      setTimeout(() => {
        const tiempoBCN = '🌞'
        resolve(tiempoBCN)
      }, tiempo)
    } else {
      reject('El servidor está caído.')
    }

  })
}


getWeather()
  .then((tiempo) => { document.body.append(tiempo) })
  .catch((error) => { console.error(error) })


//* ========================================== *//

//* Podemos concatenar varios then()

const sumarDosNumeros = (num1, num2) => {
  return new Promise((resolve, reject) => {
    resolve(num1 + num2)
  })
}

sumarDosNumeros(5, 4)
  .then((suma) => {
    sumarDosNumeros(suma, 3).then((nuevaSuma) => { console.log(nuevaSuma) })
  })
  .catch((err) => console.error(err))


//! si queremos concatenar los .then(), lo importante para que funcione es QUE EL PRIMER then() tenga un RETURN con la nueva promesa
sumarDosNumeros(5, 4)
  .then((suma) => { return sumarDosNumeros(suma, 3) })
  .then((nuevaSuma) => { console.log(nuevaSuma) })
  .catch((err) => console.error(err))
