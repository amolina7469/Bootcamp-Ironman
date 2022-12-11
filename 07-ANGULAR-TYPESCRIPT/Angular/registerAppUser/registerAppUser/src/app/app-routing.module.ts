import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch: 'full', component: HomeComponent},
  {path:"register", component: RegisterComponent },
  {path: "login", component: LoginComponent},
  //no deberiamos poder entrar sino estamos logados GUARDS
  {path:"dashboard", component:DashboardComponent, canActivate:[LoginGuard]},
  {path:"dashboard/:productos", component: ProductosComponent},
  {path:"**", redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
