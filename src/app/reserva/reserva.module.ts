import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva/reserva.component';


@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ],
  exports: [
    ReservaComponent
  ]
})
export class ReservaModule { }
