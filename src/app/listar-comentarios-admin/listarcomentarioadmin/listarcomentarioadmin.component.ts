import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ListaAlquilerI } from 'src/app/reserva/interfaces/alquiler.interface';
import Swal from 'sweetalert2';
import { ListarAlquilerAdminService } from '../services/listar-alquiler-admin.service';

@Component({
  selector: 'app-listarcomentarioadmin',
  templateUrl: './listarcomentarioadmin.component.html',
  styles: [
  ]
})
export class ListarcomentarioadminComponent implements OnInit {
  listadealquileres:ListaAlquilerI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();

  constructor(private servicioAlquiler:ListarAlquilerAdminService) { }

  ngOnInit(): void {
    this.obtenerListaAlquileres();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10
    }
  }
  obtenerListaAlquileres(){
    this.servicioAlquiler.obtenerTodosAlquiler().subscribe({
      next:(resp)=> {
        this.listadealquileres=resp;
        if(this.listadealquileres==null){
          Swal.fire({
            title: 'Nadie ha alquilado nada',
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
