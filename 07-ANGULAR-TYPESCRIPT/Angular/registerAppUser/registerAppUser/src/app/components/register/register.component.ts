import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // vamos a crear un componente registro con validaciones modelfom. Necesito module ReactiveForm

  registerForm: FormGroup;
  message: string = "";
  typeError: string = "";
  viewAlert: boolean = false;

  // first_name required y minlength 3
  // last_name required
  // email required y comprobar que está bien escrito
  // password required longitud 5-8 caracteres
  // avatar no required

  constructor(
    private usersService: UsersService,
    private router:Router
    ){
    this.registerForm = new FormGroup({
      first_name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
      avatar: new FormControl('',[])
    }, [])
  }
  async getDataForm(){
    //console.log(this.registerForm.value)
    // los enviamos al servicio
    try{
      let response = await this.usersService.create(this.registerForm.value);
      if(response.createdAt){
        //registro correcto ya está en la base de datos.Redirigir a login
          let alert = this.myAlert('Usuario registrado correctamente', 'success');
          if(alert) {
            setTimeout(()=>{
              this.router.navigate(['/login']);
            },3000)
            
          }
          
      }else{
        //registro incorrecto
        let alert = this.myAlert('Usuario no se ha podido registrar', 'danger');
      }
    console.log(response)
    } catch(err) {
      console.log(err);
    }
   
  }

  myAlert(pMessage: string, pType:string): boolean{
    this.viewAlert = true;
    this.message = pMessage;
    this.typeError =pType;

    return (this.typeError === 'success') ? true : false;
  }
  checkControl(pControlName: string, pError: string): boolean{
    if(this.registerForm.get(pControlName)?.hasError(pError) && this.registerForm.get(pControlName)?.touched){
      return true;
    } else {
      return false;
    }
  }

 
} 