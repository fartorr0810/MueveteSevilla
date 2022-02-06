import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  formGroup!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.formGroup=this.formBuilder.group({
      name:[Validators.required,Validators.minLength(4)],
      username:[Validators.required,Validators.minLength(4),Validators.pattern("/^[a-zA-Z0-9]+$/")],
      email:[Validators.required,Validators.email],
      password:[Validators.required,Validators.minLength(6),Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")]
    })
  }
  register(){
    const user=this.formGroup.value;
    console.log(user);
  }
}
