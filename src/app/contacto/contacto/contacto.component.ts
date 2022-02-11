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

  formularioContacto!:FormGroup;

  constructor(  private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.formularioContacto=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.required,Validators.minLength(9)]],
      dni:['',[Validators.required,Validators.minLength(5),Validators.pattern("^[0-9]{8,8}[A-Za-z]$")]],
      contenidocomentario:['',[Validators.required,Validators.minLength(20)]],
      usuario:Number(localStorage.getItem('idusuario'))
    })
  }


  campoEsValido(campo:string) {
    return this.formularioContacto.controls[campo].errors
            && this.formularioContacto.controls[campo].touched;
  }

  enviar(){
     let comentario=this.formularioContacto.value;
     console.log(comentario);
     this.authservice.obtenerUser();

    if (this.formularioContacto.value && !this.formularioContacto.controls['email'].errors &&
    !this.formularioContacto.controls['telefono'].errors && !this.formularioContacto.controls['email'].errors
    && !this.formularioContacto.controls['dni'].errors && !this.formularioContacto.controls['contenidocomentario']){
      // this.authservice.register(this.formularioContacto.value.email,this.formularioContacto.value.password,
      //   this.formularioContacto.value.username,this.formularioContacto.value.name).subscribe({
      //   next:(resp=>{
      //     console.log(resp);
      //     localStorage.setItem('token',resp.jwt_token!)
      //     this.router.navigateByUrl('/home');
      //   }),
      //   error:resp=>{
      //     console.log(resp);
      //   }
      // })
    }
  }
}
