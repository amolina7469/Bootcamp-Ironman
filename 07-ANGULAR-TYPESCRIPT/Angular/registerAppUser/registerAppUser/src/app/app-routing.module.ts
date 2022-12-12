import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { ProductViewComponent } from './components/dashboard/product-view/product-view.component';
import { FormComponent } from './components/dashboard/form/form.component';

const routes: Routes = [
  {path:"", pathMatch: 'full', component: HomeComponent},
  {path:"register", component: RegisterComponent },
  {path: "login", component: LoginComponent},
  //no deberiamos poder entrar sino estamos logados GUARDS
  {path:"dashboard", component:DashboardComponent, canActivate:[LoginGuard], children:
  [
    {path:"", pathMatch: "full", redirectTo:"productos"},
    {path:"productos", component: ProductosComponent},
    {path: "product/:idproduct", component: ProductViewComponent},
    {path: "new-product", component: FormComponent},
    {path: "update/:idproduct", component: FormComponent}
  ]},
  {path:"**", redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
