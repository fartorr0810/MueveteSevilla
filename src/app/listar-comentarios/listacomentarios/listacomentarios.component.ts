import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ComentarioI } from 'src/app/contacto/interfaces/comentario.interface';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-listacomentarios',
  templateUrl: './listacomentarios.component.html',
  styleUrls: []
})
export class ListacomentariosComponent implements OnInit {
  comentarios:ComentarioI[]=[];
  opcionesDataTables: DataTables.Settings={}
  triggerDatatables:Subject<any> = new Subject<any>();

  constructor(private servicioComentario:ComentarioService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
    this.opcionesDataTables={
      pagingType:'full_numbers',
      pageLength:10
    }
  }
  obtenerComentarios(){
    this.servicioComentario.obtenerComentarios().subscribe(({
      next:(resp)=> {
        this.comentarios=resp;
        this.triggerDatatables.next(resp);
      }
    }))
    }

}
