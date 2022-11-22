interface IAlumno {
  id?: number; // al poner la interrogación el campo no es obligatorio
  name: string;
  surname: string;
  age: number;
  email: string;
}

let miAlumno: IAlumno = {
  id: 1,
  name: 'Amancio',
  surname: 'Molina',
  age: 42,
  email: 'amancio@gmail.com'
}

let miAlumno2: IAlumno = {
  id: 1,
  name: 'Amancio',
  // canta error porque falta un campo
  age: 42,
  email: 'amancio@gmail.com'
}

let miAlumno3: IAlumno = {
  id: 1,
  nombre: 'Amancio', // canta error porque es name no nombre
  surname: 'Molina',
  age: 42,
  email: 'amancio@gmail.com'
}

let miAlumno4: IAlumno = { //No canta error porque el id no es obligatorio
  name: 'Amancio',
  surname: 'Molina',
  age: 42,
  email: 'amancio@gmail.com'
}