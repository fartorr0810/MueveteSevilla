import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './control-acceso/login/login.component';
import { RegisterComponent } from './control-acceso/register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,canActivate:[AuthGuard]
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
    component:DashboardComponent,canActivate:[AuthGuard]
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
