import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ListaProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent {
miProducto: Producto = {id: 0, title:"",photo:"", price: 0, stock:false}
constructor(
  private productosService: ListaProductosService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
){}

ngOnInit(){
  this.activatedRoute.params.subscribe((params:any)=>{
    let id = parseInt(params.id);

    let response = this.productosService.getById(id);

    if(response) {
      this.miProducto =response;
    }else {
      this.router.navigate(['/listaproductos']);
    
    }
  })
}

}
