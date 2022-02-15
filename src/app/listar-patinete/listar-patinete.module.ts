import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPatineteRoutingModule } from './listar-patinete-routing.module';
import { ListapatineteComponent } from './listapatinete/listapatinete.component';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    ListapatineteComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    ListarPatineteRoutingModule
  ],
  exports: [ListapatineteComponent]
})
export class ListarPatineteModule { }
