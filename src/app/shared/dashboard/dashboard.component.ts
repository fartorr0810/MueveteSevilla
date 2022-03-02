import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() fecha!: Date;
  saludo:string="";
  rol:string=localStorage.getItem('rol')!;
  constructor(private router:Router) { }

  bienvenida(){
    if (this.rol==""){
      this.saludo="Login"
    }
    if (this.rol=="Admin"){
      this.saludo="Administrador"
    }
    if (this.rol=="User"){
      this.saludo="Usuario"
    }
  }


  ngOnInit(): void {
    this.bienvenida();
    console.log(this.rol);

  }
  ngOnChanges(){
  }

  cerrarSesion(){
    if (localStorage.getItem('idusuario')!=null){
    this.router.navigateByUrl('/home').then(then=>{
      window.location.reload();
    })

    }else{
      Swal.fire({
        title: 'No hay ninguna sesion activa',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    }
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }

}
