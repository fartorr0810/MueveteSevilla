import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from 'src/app/listar-patinete/interfaces/patinete.interface';
import { AlquilerI } from '../interfaces/alquiler.interface';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  constructor(private http:HttpClient) { }


  alquilarPatinete(alquiler:AlquilerI){
    let direccionurl="http://localhost:9000/alquiler";

    let bodypeticion={
      horaentrega:alquiler.horaentrega,
      horasalquiler:alquiler.horasalquiler,
      patinete:alquiler.patinete,
      user:alquiler.user
    }

    const httpHeaders=new HttpHeaders();
    return this.http.post<AlquilerI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
  obtenerPatinetesDisponibles():Observable<Patinete[]>{
    let direccionurl="http://localhost:9000/patinete?filtro=disponible";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Patinete[]>(direccionurl,{ headers: httpHeaders});
  }
}
