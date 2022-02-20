import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AlquilerI, ListaAlquilerI } from 'src/app/reserva/interfaces/alquiler.interface';
import { AlquilerService } from 'src/app/reserva/services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listaalquiler',
  templateUrl: './listaalquiler.component.html',
  styles: [
  ]
})
export class ListaalquilerComponent implements OnInit {

  listadealquileres:ListaAlquilerI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();
  isEmpty:boolean = true;

  constructor(private router:Router,private servicioAlquiler:AlquilerService) { }

  ngOnInit(): void {
    this.obtenerListaAlquileres();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10
    }
  }

  obtenerListaAlquileres(){
    this.servicioAlquiler.getListaAlquilerUsuario().subscribe({
      next:(resp)=> {
        this.listadealquileres=resp;
        console.log(resp)
        if(this.listadealquileres.length==0){
          Swal.fire({
            title: 'No tiene alquileres realizados',
            icon: 'info',
            confirmButtonText: 'Ok'
          });
        }
        else{
          this.triggerDatatables.next(resp);
        }
      }
    })
  }



}
