import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from '../interfaces/patinete.interface';

@Injectable({
  providedIn: 'root'
})
export class PatineteService {

  constructor(private http:HttpClient) { }

  obtenerPatinetes():Observable<Patinete[]>{
    let direccionurl="http://localhost:9000/patinete";
    console.log(direccionurl)
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<Patinete[]>(direccionurl,{ headers: httpHeaders});
  }
}
