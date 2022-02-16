import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './control-acceso/login/login.component';
import { RegisterComponent } from './control-acceso/register/register.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path:'',canActivate:[AuthGuard],
    loadChildren:()=> import('./shared/shared.module').then(m=> m.SharedModule)
  },
   {
     path:'login',
     component:LoginComponent,
     loadChildren:() => import('./control-acceso/control-acceso.module').then(m=> m.ControlAccesoModule)
   },
   {
     path:'register',
     component:RegisterComponent
   },
   {
     path:'home',
     component:HomeComponent
   },
   {
    path:'contacto',
    loadChildren:()=> import('./contacto/contacto.module').then(m=>m.ContactoModule)
   },
   {
    path:'listapatinetes',canActivate:[AuthGuard],
    loadChildren:()=> import('./listar-patinete/listar-patinete.module').then(m=>m.ListarPatineteModule)
   },
   {
    path:'reserva',canActivate:[AuthGuard],
    loadChildren:()=> import('./reserva/reserva.module').then(m=>m.ReservaModule)
   },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
