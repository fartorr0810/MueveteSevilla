import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  @Output() busqueda = new EventEmitter<string>();
  termino:string='';

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    this.busqueda.emit(this.termino);

  }
}
