# Métodos de Primera Clase

## .forEach()  -->  FOR...OF

Úsalo como un `for...of`. Simplemente recorre un array y haz lo que quieras en cada vuelta.
Te regala:
  1. Cada valor del array
  2. El índice
  3. El array entero

```javascript
array.forEach((valor, indice, array) => {
  // haz lo qe quieras aquí
  console.log(valor, indice)
})
```

---

## .find() --> UN ELEMENTO

Úsalo cuando quieras encontrar UN SOLO ELEMENTO según una condición. **Siempre te devolverá el primero que encuentre.**

* NORMA 1: Para quete devuelva un elemento, el CALBACK TIENE QUE RETORNAR `true`, si no, significa que no ha encontrado ningñun elemento y te devolverá `undefined`

Te regala:
  1. Cada valor del array
  2. El índice
  3. El array entero

```javascript
array.find((valor, indice, array) => {
  return (condicion) ? true : false
})
```
```javascript
array.find((valor, indice, array) => (condicion))
```

---

## .filter()  --> VARIOS ELEMENTOS

Úsalo cuando quieras FILTRAR UN ARRAY y obtener un NUEVO ARRAY con solo los elementos que cumplan una condición.

* NORMA 1: Para que el elemento que estés iterando se meta en el nuevo array, el callback TIENE QUE RETORNAR `true`, si no se cumple NINGUNO, devolverá un array vacío `[]`

```javascript
array.filter((valor, indice, array) => {
  return (condicion) ? true : false
})
```

```javascript
array.filter((valor, indice, array) => (condicion))
```
