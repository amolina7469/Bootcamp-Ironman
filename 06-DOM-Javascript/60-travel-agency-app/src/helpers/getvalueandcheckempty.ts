const getValueAndCheckEmpty = (input) => {
  const value = input.value 
  console.log('hola')
   if (value.trim() === '') {
    input.classList.add('is-invalid')    
    return null  } else {
    input.classList.remove('is-invalid')
    return value  }
}

export {getValueAndCheckEmpty}