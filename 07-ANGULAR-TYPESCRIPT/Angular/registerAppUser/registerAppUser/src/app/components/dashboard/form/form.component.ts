import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

form: FormGroup;
arrCategorias: string[]=[];
titulo: string = "Insertar";
// propiedades de la alerta
mensaje: string = "";
vistaAlerta: boolean = false;
tipoError: string = "";


constructor( 
  private productService: ProductsService,
  private router: Router,
  private activatedRoute: ActivatedRoute
  ){
  this.form = new FormGroup({
    name:new FormControl('',[]), 
    description:new FormControl('',[]), 
    price:new FormControl('',[]), 
    category:new FormControl('',[]), 
    image:new FormControl('',[]), 
    active:new FormControl('',[]), 
  },[])
}

async ngOnInit(): Promise<void> {
  this.arrCategorias = await this.productService.getAllCategories();
  this.activatedRoute.params.subscribe(async(params:any) => {
    let id = params.idproduct;
    if(id){
      this.titulo = "Actualizar";
      // debemos hacer una petición al servicio para traernos los datos del producto por id getById llenamos los campos del formulario con los datos de la petición y gestionamos la actualización con la API.
      let producto = await this.productService.getById(id);
      this.form = new FormGroup({
        _id: new FormControl(producto._id,[]),
        name:new FormControl(producto.name,[]), 
        description:new FormControl(producto.description,[]), 
        price:new FormControl(producto.price,[]), 
        category:new FormControl(producto.category,[]), 
        image:new FormControl(producto.image,[]), 
        active:new FormControl(producto.active,[]), 
      },[])
    }
  })
}

async getDataForm(): Promise<void>{
  this.vistaAlerta = false;
  if(this.form.value._id){
    let response: any =  await this.productService.update(this.form.value);
    if(!response.error){
      this.router.navigate(['/dashboard','productos']);
    }else {
      this.vistaAlerta= true;
      this.mensaje = response.error;
      this.tipoError = 'danger';
    }
  } else {
    let response: any = await this.productService.create(this.form.value);
    console.log(response)
//deberiamos redirigir al listado de productos y ver el nuevo producto listado.
    if(response.id){
      this.router.navigate(['/dashboard','productos']);
    }
  }
}


}
