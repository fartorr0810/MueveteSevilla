import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioI } from 'src/app/contacto/interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http:HttpClient) { }

  obtenerComentarios():Observable<ComentarioI[]>{
    let direccionurl="http://localhost:9000/comentario";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<ComentarioI[]>(direccionurl,{ headers: httpHeaders});
  }
}
