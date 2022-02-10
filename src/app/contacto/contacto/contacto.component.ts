import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlAccesoService } from 'src/app/control-acceso/services/control-acceso.service';
import { ComentarioI } from '../interfaces/comentario.interface';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    email:!['',[Validators.required,Validators.email]],
    telefono:!['',[Validators.required,Validators.minLength(5)]],
    dni:!['',[Validators.required,Validators.minLength(5)]],
    contenidocomentario:!['',[Validators.required,Validators.minLength(5)]],
    usuario:!['',[Validators.required,Validators.minLength(5)]],

  })

  comentario: ComentarioI={
    email:'',
    telefono:'',
    dni:'',
    contenidocomentario:'',
    usuario:Number(localStorage.getItem("idusuario"))
  }

  constructor(  private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  enviar(){

  }
}
