import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from 'src/app/listar-patinete/interfaces/patinete.interface';
import { AlquilerI, CalcularAlquiler, ListaAlquilerI } from '../interfaces/alquiler.interface';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  constructor(private http:HttpClient) { }


  alquilarPatinete(alquiler:AlquilerI){
    let direccionurl="http://localhost:9000/alquiler";
    let bodypeticion:AlquilerI={
      horaentrega:alquiler.horaentrega,
      horasalquiler:alquiler.horasalquiler,
      patinete:alquiler.patinete,
      user:alquiler.user
    }
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<AlquilerI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  calcularPrecioYFecha(alquiler:any){
    let direccionurl="http://localhost:9000/calcular-alquiler";
    let bodypeticion:AlquilerI={
      horaentrega:alquiler.horaentrega,
      horasalquiler:alquiler.horasalquiler,
      patinete:alquiler.patinete,
      user:alquiler.user
    }
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<CalcularAlquiler>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  entregarPatinete(idalquiler:number){
    let direccionurl="http://localhost:9000/alquiler/"+idalquiler;
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.put(direccionurl,{ headers: httpHeaders});

  }
  obtenerPatinetesDisponibles():Observable<Patinete[]>{
    let direccionurl="http://localhost:9000/patinete?filtro=disponible";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Patinete[]>(direccionurl,{ headers: httpHeaders});
  }

  getListaAlquilerUsuario(){
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let idusuario=localStorage.getItem('idusuario')!;
    const httpParams=new HttpParams().set('id',idusuario);
    let direccionurl="http://localhost:9000/alquiler/"+idusuario;
    return this.http.get<ListaAlquilerI[]>(direccionurl,{headers:httpHeaders,params:httpParams});
  }
}
