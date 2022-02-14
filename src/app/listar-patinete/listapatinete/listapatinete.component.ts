import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listapatinete',
  templateUrl: './listapatinete.component.html',
  styles: [
  ]
})
export class ListapatineteComponent implements OnInit {

  linesToWrite!: Array<string>;
  finishPage = 5;
  actualPage!: number;

  constructor() {
    this.actualPage=1;
   }

  ngOnInit() {
    this.linesToWrite = new Array<string>();
    this.add40lines();
  }

  add40lines() {
    const line = 'Another new line -- ';
    let lineCounter = this.linesToWrite.length;
    for (let i = 0; i < 40; i ++) {
      this.linesToWrite.push(line + lineCounter);
      lineCounter ++;
    }
  }
  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.add40lines();
      this.actualPage ++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }
}
