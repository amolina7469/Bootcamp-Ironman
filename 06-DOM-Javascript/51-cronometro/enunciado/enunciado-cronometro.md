# Hacer un cronómetro

## Crea 3 botones en `index.html` que serviran para Arrancar, parar y resetear el cronómetro.

## Crear una clase Crono
Crea la clase en un archivo javascript aparte que llamaremos `Crono.js` y lo importas en el `main.js`

```javascript
class Crono {
    //...
}
```

### Cada instancia de Crono va a tener unas propiedades que empezarán en ==0==

* `this.tiempoInicio = 0`
* `this.tiempoFinal = 0`

### Para calcular los tiempos utilizad el método estático `Date.now()`, que nos guarda los milisegundos exactos del momento en que hemos arrancado o parado. Hay que guardar esos valores en las propiedades del Crono, no fuera.

### Cada Crono va a poder:

* **ARRANCAR** el cronómetro
* **PARAR** el cronómetro
* **RESETEAR** el cronómetro
* **MOSTRAR** el tiempo que ha pasado

### Hay que revisar y evaluar posibles errores:

* Si el cronómetro está encendido no podemos encenderlo otra vez.
* Si el cronómetro está parado no podemos volverlo a parar.
* Si el cronómetro está en marcha o nunca se ha encendido, no podemos resetear.

##### Tests

Crear una instancia de Crono:

```javascript
const c1 = new Crono()
```

Y jugad en la consola de chrome para hacer pruebas

```javascript
// consola
c1.start()
//
//
c1.stop()
c1.showTime()
```

* Encended, apagad y mirad si muestra milisegundos en consola.
* Encended y volved a encender -> debería mostrar un error
* Encended, apagad y volved a apagar -> debería mostrar un error
* Resetead con el reloj ya en 0 -> debería dar un error
* Encended y resetear -> debería dar un error

#### ¡EXTRA! 
HACED LO MISMO CON LOS BOTONES Y EN EL DOM
