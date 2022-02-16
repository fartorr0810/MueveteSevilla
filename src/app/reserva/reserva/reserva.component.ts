import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlAccesoService } from 'src/app/control-acceso/services/control-acceso.service';
import { AlquilerService } from '../services/alquiler.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: [
  ]
})
export class ReservaComponent implements OnInit {
  formularioContacto!:FormGroup;

  constructor(private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder,
    private servicioContacto: AlquilerService) { }

  ngOnInit(): void {

  }

  buildForm(){
    let numero:number=Number(String(localStorage.getItem('idusuario')));
    this.formularioContacto=this.fb.group({
      patinete:['',[Validators.required,Validators.min(0)]],
      horaentrega:['',[Validators.required]],
      horasalquiler:['',[Validators.minLength(9)]],
      confirmacion:['',[Validators.required]]
    })
  }

  campoEsValido(campo:string) {
    return this.formularioContacto.controls[campo].errors
            && this.formularioContacto.controls[campo].touched;
  }
  calcularPrecioYFecha(){

  }
  alquilar(){

  }
}
