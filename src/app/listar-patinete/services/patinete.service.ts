import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatineteService {

  constructor(private http:HttpClient) { }

  obtenerPatinetes(){
    let direccionurl="http://localhost:9000/patinetes";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get(direccionurl,{ headers: httpHeaders});
  }
}
