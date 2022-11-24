import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  datos: any = {
    edad: 40,
    email: 'juan@gmail.com',
    telefono: 678567543
  }

  color: string = 'verde';
  numeroAleatorio: number = Math.ceil(Math.random()*4);

  arrImagenes: any[];
  numeroImagen: number = 0;

constructor(){
  this.arrImagenes= [
    {name:'Perrito', url:"https://images.hola.com/imagenes/mascotas/20200818173745/razas-de-perro-mas-grunonas/0-856-810/razas-perro-t.jpg"},
    {name:'Gatito', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yHgcKYu5GAnrbrxYkx8jJoNmvgqQ-pjEs1BQG_Y-gYo0eQULgqWZE1JMkQEgxUS8alo&usqp=CAU"},
    {name: 'Periquito', url:"https://s1.eestatic.com/2021/07/05/actualidad/594201380_194261561_1706x960.jpg"}
  ]
}
// Función de ciclo de vida de un componente
// Se ejecutan si o si en cada proceso del ciclo. La más importante es la que ocurre cuando se carga el componente ngOnInit() es un "hook
ngOnInit(): void {
  console.log('componente cargado');
  const intervalo = setInterval(() =>{
    if(this.numeroImagen < this.arrImagenes.length - 1){
      this.numeroImagen++;
    }else {
      this.numeroImagen = 0;
    }
  }, 2000)
}
}
