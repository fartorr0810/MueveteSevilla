import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  miFormulario:FormGroup=this.fb.group({
    email:! ['',[Validators.required,Validators.email]],
    password:!['',[Validators.required,Validators.minLength(4)]],
  });
  usuario: UsuarioLogin={
    email:'',
    password:''
  }
  constructor(private fb: FormBuilder,
      private router: Router,
      private authservice: ControlAccesoService) {
  }

  ngOnInit(): void {
  }

  login(){
    const {email,password}=this.miFormulario.value;
    this.authservice.login(email,password).subscribe({
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
