import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlAccesoModule } from './control-acceso/control-acceso.module';
import { FormsModule } from '@angular/forms';
import { ControlAccesoService } from './control-acceso/services/control-acceso.service';
import { LoginComponent } from './control-acceso/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ControlAccesoModule
  ],
  providers: [ControlAccesoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
