//? Formularios
//* Podemos funcionar sin una etiqueta form. Siempre usando un input, lo cazas y consigues el valor de lo que escriban

const inputNombre = document.querySelector('.input-nombre')
const enviar = document.querySelector('.enviar')


enviar.addEventListener('click', () =>{
    // console.log(inputNombre.value)
  const nombreUsuario = inputNombre.value
  console.log(nombreUsuario)

})


//! Si tuvieramos muchos inputs tendríamos que cazarlos todos
//*  pero usando la etiqueta form podemos usar los name que hayamos puesto además de otras cosas

const form1 = document.querySelector('.form1')

//escuchamos el evento submit del formulario

  console.dir(form1)


form1.addEventListener('submit', (event) =>{
  event.preventDefault()
  console.log('enviado')
})

const nombreUsuario = form1.nombre.value
const apellidoUsuario = form1.apellido.value

  console.log(nombreUsuario, apellidoUsuario)

