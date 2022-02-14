import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarPatineteRoutingModule } from './listar-patinete-routing.module';
import { ListapatineteComponent } from './listapatinete/listapatinete.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListapatineteComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    ListarPatineteRoutingModule
  ],
  exports: [ListapatineteComponent]
})
export class ListarPatineteModule { }
