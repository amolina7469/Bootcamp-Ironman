import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

registerProduct: FormGroup
response:  any = {text:"", value: false};

constructor(private productsService: ProductsService ){
  this.registerProduct = new FormGroup({
    title: new FormControl('',[
      Validators.pattern(/^[a-zA-Z ]{2,254}/)
    ]),
    price: new FormControl('',[]),
    quantity: new FormControl('',[]),
  },[]);
}


getDataForm(){
  console.log(this.registerProduct.value)
  this.response = this.productsService.insert(this.registerProduct.value);
  setTimeout(() =>{
    this.response = {text: "", value: false};
  },5000)
  this.registerProduct.reset();
 
}

}
