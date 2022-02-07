import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ControlAccesoService } from '../services/control-acceso.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  formulario!:FormGroup;
  constructor(private formBuilder: FormBuilder,private authservice: ControlAccesoService,
    private router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.formulario=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      username:['',[Validators.required,Validators.minLength(4),Validators.pattern("^[a-z0-9_-]{8,15}$")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  campoEsValido(campo:string) {
    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;
  }
  register(){
    const user=this.formulario.value;
    if (this.formulario.value && !this.formulario.controls['name'].errors &&
    !this.formulario.controls['username'].errors && !this.formulario.controls['email'].errors
    && !this.formulario.controls['password'].errors){
      this.authservice.register(this.formulario.value.email,this.formulario.value.password,
        this.formulario.value.username,this.formulario.value.name).subscribe({
        next:(resp=>{
          console.log(resp);
          localStorage.setItem('token',resp.access_token!)
          this.router.navigateByUrl('/home');
        }),
        error:resp=>{
          console.log(resp);
        }
      })
    }
  }
}
