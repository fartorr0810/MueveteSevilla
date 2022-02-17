import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlAccesoService } from 'src/app/control-acceso/services/control-acceso.service';
import { Patinete } from 'src/app/listar-patinete/interfaces/patinete.interface';
import Swal from 'sweetalert2';
import { AlquilerService } from '../services/alquiler.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styles: [
  ]
})
export class ReservaComponent implements OnInit {
  formularioContacto!:FormGroup;
  listapatinetesDisponibles: Patinete[] = [];
  precio!:number;
  horadevolucion!:string;
  fechaahora = new Date().toJSON().slice(0,18);

  constructor(private router: Router,
    private authservice: ControlAccesoService,
    private fb:FormBuilder,
    private servicioAlquiler: AlquilerService) { }

  async ngOnInit() {
    this.buildForm();
    this.patinetesDisponibles();
    this.authservice.obtenerUser();
  }

  buildForm(){
    let numero:number=Number(String(localStorage.getItem('idusuario')));
    this.formularioContacto=this.fb.group({
      patinete:['',[Validators.required,Validators.min(0)]],
      horaentrega:['',[Validators.required]],
      horasalquiler:['',[Validators.required,Validators.min(0)]],
      confirmacion:[false,[Validators.required]],
      user:[localStorage.getItem("idusuario")],
    })
  }

  campoEsValido(campo:string) {
    return this.formularioContacto.controls[campo].errors
            && this.formularioContacto.controls[campo].touched;
  }
  calcularPrecioYFecha(){
    const alquiler=this.formularioContacto.value;
    this.servicioAlquiler.calcularPrecioYFecha(alquiler).subscribe({
      next:(resp)=>{
        this.precio=resp.preciototal;
        this.horadevolucion=resp.horarecogida;
      }
      })

  }
  patinetesDisponibles(){
    this.servicioAlquiler.obtenerPatinetesDisponibles().subscribe({
      next:(resp)=>{
        this.listapatinetesDisponibles=resp;
      },
      error:()=>{
        Swal.fire({
          title: 'Lo sentimos',
          text: 'No hay patinetes disponibles',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }
  alquilar(){
    const alquiler=this.formularioContacto.value;
    console.log(alquiler);
    this.servicioAlquiler.alquilarPatinete(alquiler).subscribe({
    next:(resp=>{
      Swal.fire({
        title: 'Gracias',
        text: 'Patinete alquilado con exito',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    }),
    error:resp=>{
      Swal.fire({
        title: 'Lo sentimos',
        text: 'Este patinete ya ha sido alquilado',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  })
  }
}
