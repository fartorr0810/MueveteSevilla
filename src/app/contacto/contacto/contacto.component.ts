import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlAccesoService } from 'src/app/control-acceso/services/control-acceso.service';
import Swal from 'sweetalert2';
import { ComentarioI } from '../interfaces/comentario.interface';
import { ContactoserviceService } from '../services/contactoservice.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: []
})
export class ContactoComponent implements OnInit {

  formularioContacto!:FormGroup;

  constructor(  private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder,
    private servicioContacto: ContactoserviceService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    let numero:number=Number(String(localStorage.getItem('idusuario')));
    this.formularioContacto=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.minLength(9)]],
      contenidocomentario:['',[Validators.required,Validators.minLength(20)]],
    })
  }


  campoEsValido(campo:string) {
    return this.formularioContacto.controls[campo].errors
            && this.formularioContacto.controls[campo].touched;
  }

  enviar(){
     let comentario:ComentarioI=this.formularioContacto.value;
    if (this.formularioContacto.value){
      this.servicioContacto.enviarComentario(comentario).subscribe({
        next:(resp=>{
          Swal.fire({
            title: 'Gracias',
            text: 'Comentario enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        }),
        error:resp=>{
          Swal.fire({
            title: resp.error.message,
            text: 'Incorrecto',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    }
  }
}
