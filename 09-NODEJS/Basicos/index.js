const colors = require('colors');
const axios = require('axios').default;

// const operaciones = require('./operaciones');
const { mult } = require('./operaciones');


console.log('hello'.green);
console.log(colors.rainbow('OMG Rainbows!'));

axios.get('https://www.rickandmortyapi.com/api/character')
  .then((response)=>{
    // console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  });

// console.log(operaciones.mult(4,5));
console.log(mult(4,5));