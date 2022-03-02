import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioI } from 'src/app/contacto/interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
//Servicio de comentarios
export class ComentarioService {

  constructor(private http:HttpClient) { }
/**
 * Llamamos a la API pasandole el token para obtener un array con los comentarios.
 * @returns
 */
  obtenerComentarios():Observable<ComentarioI[]>{
    let direccionurl="http://localhost:9000/comentario";
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.get<ComentarioI[]>(direccionurl,{ headers: httpHeaders});
  }
}
