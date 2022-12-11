import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(private router: Router){}

  canActivate():  boolean | UrlTree {
    console.log('paso por el guard')
    let token: string | null = localStorage.getItem('token');

    if(token === null){
      this.router.navigate(['/login'])
      return false;
    }else{
      return true;
    }
    
  }
  
}
