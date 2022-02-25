import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from '../interfaces/patinete.interface';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase servicio del Patinete
 */
export class PatineteService {
//Constructor donde inyectamos el HttpClient
  constructor(private http:HttpClient) { }
/**
 * Metodo que realizamos una peticion al back de todos los patinetes existentes.
 * @returns devolvemos la lista de patinetes.
 */
  obtenerPatinetes():Observable<Patinete[]>{
    let direccionurl="http://localhost:9000/patinete";
    console.log(direccionurl)
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Patinete[]>(direccionurl,{ headers: httpHeaders});
  }

  obtenerFoto(patinete:Patinete){
    const base64String = btoa(String.fromCharCode(...new Uint8Array(patinete.imagen)));
    const source = `data:image/png;base64,${base64String}`+patinete.imagen;
    return source;
  }
}
