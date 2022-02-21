import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Patinete } from '../interfaces/patinete.interface';
import { PatineteService } from '../services/patinete.service';

@Component({
  selector: 'app-listapatinete',
  templateUrl: './listapatinete.component.html',
  styles: [
  ]
})
/**
 * Clase de ListarPatinetes
 */
export class ListapatineteComponent implements OnInit {
//Atrivutos necesarios
  listapatinetes: Patinete[] = [];
  allpost:any;
  notEmptyPost = true;
  notscrolly = true;
  numbers: number[] = [];

  //Llamamos a cargar los patinetes
   ngOnInit() {
     this.loadInitPost();
  }
  //Constructor donde inyectamos el servicio de patinetes
  constructor(private servicioPatinete:PatineteService) {
  }
/**
 * Llamamos a obtenerPatinetes que esta en el servicio de Patintetes, si no hay patinetes
 * mostramos un alert con que no hay patinetes no estan disponibles
 */
  loadInitPost() {
    this.servicioPatinete.obtenerPatinetes()
    .subscribe({
      next: (resp => {
        this.listapatinetes=resp;
      }),
      error: (resp => {
        Swal.fire({
          title: 'Error',
          text: 'Los patinetes no estan disponibles',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      })
    })
 }
 }

