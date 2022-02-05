import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './control-acceso/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  // {
  //   path:'login',
  //   loadChildren:() => import('./control-acceso/control-acceso.module').then(m=> m.ControlAccesoModule)
  // },
  {
    path:'login',
    component:LoginComponent
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
