import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  @Input() fecha!: Date;
  @Output() myOutput:EventEmitter<string>= new EventEmitter();
  outputMessage:string="I am child component."

  rol:string=localStorage.getItem('rol')!;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
  }
  cerrarSesion(){
    if (localStorage.getItem('idusuario')!=null){
      Swal.fire({
        title: 'La sesion se ha cerrado con exito',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
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
