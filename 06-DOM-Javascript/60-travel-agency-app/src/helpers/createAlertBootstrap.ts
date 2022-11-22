const createAlertBootstrap = (mensaje = 'Error', color = 'danger') => {
  const alertBox = document.createElement('div')
  alertBox.className = `alert alert-${color} text-center position-fixed start-50 bottom-0 translate-middle-x`
  alertBox.setAttribute('role', 'alert')
  alertBox.innerHTML = `<p class="m-0">${mensaje}</p>`

  
  // podemos añadir las animaciones desde javascript directamente
  const fadeInFadeOut = alertBox.animate([
    { opacity: 0, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible', offset: 0.1 },
    { opacity: 1, visibility: 'visible', offset: 0.9 },
    { opacity: 0, visibility: 'hidden' },
  ], { duration: 6000, easing: 'ease', fill: 'forwards' })

  fadeInFadeOut.addEventListener('finish', () => alertBox.remove())


  // Para eliminar algo del DOM después de ESPERAR a que se TERMINE LA ANIMACIÓN usamos el evento "animationend"
  alertBox.addEventListener('animationend', () => alertBox.remove())

  document.body.append(alertBox)
}

export default createAlertBootstrap