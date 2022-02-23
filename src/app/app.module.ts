import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlAccesoModule } from './control-acceso/control-acceso.module';
import { FormsModule } from '@angular/forms';
import { ControlAccesoService } from './control-acceso/services/control-acceso.service';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './auth.guard';
import { ContactoModule } from './contacto/contacto.module';
import { SharedModule } from './shared/shared.module';
import { ListarPatineteModule } from './listar-patinete/listar-patinete.module';
import { ReservaModule } from './reserva/reserva.module';
import { ListarAlquilerModule } from './listar-alquiler/listar-alquiler.module';
import { AnadirComponent } from './anadirPatinete/anadir/anadir.component';

@NgModule({
  declarations: [
    AppComponent,
    AnadirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ControlAccesoModule,
    ListarAlquilerModule,
    HomeModule,
    ContactoModule,
    SharedModule,
    ListarPatineteModule,
    ReservaModule
  ],
  providers: [ControlAccesoService,AuthGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
