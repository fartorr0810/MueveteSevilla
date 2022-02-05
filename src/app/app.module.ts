import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlAccesoModule } from './control-acceso/control-acceso.module';
import { FormsModule } from '@angular/forms';
import { ControlAccesoService } from './control-acceso/services/control-acceso.service';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ControlAccesoModule,
    HomeModule
  ],
  providers: [ControlAccesoService,AuthGuard,HomeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
