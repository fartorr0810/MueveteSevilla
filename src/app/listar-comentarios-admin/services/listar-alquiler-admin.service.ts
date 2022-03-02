import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaAlquilerI } from 'src/app/reserva/interfaces/alquiler.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarAlquilerAdminService {

  constructor(private http:HttpClient) { }


  obtenerTodosAlquiler():Observable<ListaAlquilerI[]>{
    let direccionurl="http://localhost:9000/alquiler";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<ListaAlquilerI[]>(direccionurl,{ headers: httpHeaders});
  }
}
