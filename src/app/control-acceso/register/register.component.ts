import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  formulario!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.formulario=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      username:['',[Validators.required,Validators.minLength(4),Validators.pattern("/^[a-zA-Z0-9]+$/")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")]]
    })
  }
  register(){
    const user=this.formulario.value;

    console.log(user);
  }
  campoEsValido( campo: string ) {
    console.log(campo);
    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;
  }
  //TODO
  login(){
    console.log(this.formulario.value);
    if (this.formulario.value){
      this.authservice.login(this.usuario.email,this.usuario.password).subscribe({
        next:(resp=>{
          localStorage.setItem('token',resp.access_token!)
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
