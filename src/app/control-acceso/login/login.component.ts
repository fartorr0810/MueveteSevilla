import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../interfaces/auth-response.interface';
import { ControlAccesoService } from '../services/control-acceso.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm={
    email:'',
    password:''
  }
  usuario: UsuarioLogin={
    email:'',
    password:''
  }
  constructor(
      private router: Router,
      private authservice: ControlAccesoService) {
  }

  ngOnInit(): void {
  }

  login(){
    const {email,password}=this.miFormulario.value;
    console.log(this.miFormulario.value);
    if (this.miFormulario.value){
      this.authservice.login(this.usuario.email,this.usuario.password).subscribe({
        next:(resp=>{
          localStorage.setItem('token',resp.access_token!)
          this.router.navigateByUrl('/home');
        }),
        error:resp=>{
          console.log("Aqui va SweetAlert");
        }
      })
    }
  }
  // emailValido():boolean{
  //   return this.miFormulario?.controls['email'].invalid && this.miFormulario?.controls['email'].touched;
  // }
  // passwordValido():boolean{
  //   return this.miFormulario?.controls['password']?.invalid && this.miFormulario?.controls['password'].touched;
  // }
}
