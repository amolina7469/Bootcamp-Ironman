import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {

  formulario: FormGroup;
  arrErrores: [];
  files: any;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      department: new FormControl(),
      available: new FormControl(),
      stock: new FormControl(),
      image: new FormControl()
    });
    this.arrErrores = [];
  }

  async onSubmit() {
    if (!this.formulario.value.available) {
      this.formulario.value.available = false;
    }

    //objeto FormData para envío de formulario con imagines
    const { name, description, price, available, stock, department } = this.formulario.value;

    const fd = new FormData();
    fd.append('image', this.files[0]);
    fd.append('name', name);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('available', available);
    fd.append('stock', stock);
    fd.append('department', department);

    const response = await this.productsService.create(fd);
    if (response._id) {
      this.router.navigate(['/productos']);
    } else {
      this.arrErrores = response;
    }
  }

  onChange($event: any) {
    this.files = $event.target.files;

  }
}
