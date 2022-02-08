import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioLogin } from '../interfaces/auth-response.interface';
import { ControlAccesoService } from '../services/control-acceso.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  formulario:FormGroup=this.fb.group({
    email:!['',[Validators.required,Validators.email]],
    password:!['',[Validators.required,Validators.minLength(5)]]
  })

  usuario: UsuarioLogin={
    email:'',
    password:''
  }
  constructor(
      private router: Router,
      private authservice: ControlAccesoService,
      private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formulario.value);
    if (this.formulario.value){
      this.authservice.login(this.usuario.email,this.usuario.password).subscribe({
        next:(resp=>{
          localStorage.setItem('token',resp.jwt_token!)
          this.router.navigateByUrl('/home');
        }),
        error:resp=>{
          Swal.fire({
            title: resp.error.message,
            text: 'Email o Password Incorrecto',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })
    }
  }

}
