import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentarioI } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoserviceService {

  constructor(private http:HttpClient) { }

  enviarComentario(comentario:ComentarioI){
    let direccionurl="http://localhost:9000/comentario";
    let bodypeticion={
      'email':comentario.email,
      'telefono':comentario.telefono,
      'contenidocomentario':comentario.contenidocomentario,
      'usuario':comentario.usuario
    }
    const httpHeaders=new HttpHeaders();
    return this.http.post<ComentarioI>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }


}
