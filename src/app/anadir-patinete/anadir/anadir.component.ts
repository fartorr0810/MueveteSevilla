import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AnadirpatineteService } from '../services/anadirpatinete.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styles: [
  ]
})
export class AnadirComponent implements OnInit {
  formulario = new FormGroup({
    modelo: new FormControl('',[Validators.required]),
    precioHora:new FormControl('',[Validators.required]),
    disponible: new FormControl(true,[Validators.required]),
    kmhora:new FormControl('',[Validators.required]),
    file:new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });
  constructor(private serviciofichero:AnadirpatineteService) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formulario.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
    const patin={
      modelo:this.formulario.get('modelo')?.value,
      precioHora:this.formulario.get('precioHora')?.value,
      disponible:this.formulario.get('disponible')?.value,
      kmhora:this.formulario.get('kmhora')?.value,

    }
    const formData = new FormData();
    formData.append('file', this.formulario.get('fileSource')!.value);
    console.log(formData.get('file'));

    this.serviciofichero.subirFichero(formData, patin).subscribe(resp=>{
      Swal.fire({
        title: 'Patinete añadido con exito',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })

  }

}
