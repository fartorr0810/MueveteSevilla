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
export class ListapatineteComponent implements OnInit {

  // linesToWrite!: Array<string>;
  // finishPage = 5;
  // actualPage!: number;
  // listapatinetes: Patinete[] = [];


  // ngOnInit() {
  // }


  // onScroll() {
  //   if (this.actualPage < this.finishPage) {
  //     this.actualPage ++;
  //   } else {
  //     console.log('No more lines. Finish page!');
  //   }
  // }

  listapatinetes: Patinete[] = [];
  allpost:any;
  notEmptyPost = true;
  notscrolly = true;
  numbers: number[] = [];

   ngOnInit() {
     this.loadInitPost();
  }
  constructor(private servicioPatinete:PatineteService) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

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
 onScroll() {
 if (this.notscrolly && this.notEmptyPost) {
   this.notscrolly = false;
   this.loadNextPost();
  }
 }
 // load th next 6 posts
 loadNextPost() {
   const lastPost = this.listapatinetes[this.listapatinetes.length - 1];
  this.listapatinetes = this.listapatinetes.concat(this.listapatinetes);
  this.notscrolly = true;
    }
 }

