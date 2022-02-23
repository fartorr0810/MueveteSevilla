import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  rol:string=localStorage.getItem('rol')!;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
  }
}
