import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from 'src/app/control-acceso/interfaces/auth-response.interface';
import { ComentarioI } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoserviceService {

  constructor(private http:HttpClient) { }

  enviarComentario(comentario:ComentarioI){
    let direccionurl="http://localhost:9000/comentario";
    console.log(comentario);
    let bodypeticion={
      'email':comentario.email,
      'telefono':comentario.telefono,
      'dni':comentario.dni,
      'contenidocomentario':comentario.contenidocomentario,
      'usuario':comentario.usuario
    }
    console.log(bodypeticion);
    const httpHeaders=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    return this.http.post<ComentarioI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }


}
