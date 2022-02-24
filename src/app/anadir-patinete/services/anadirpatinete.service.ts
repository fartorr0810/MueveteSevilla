import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patinete, PatineteSubida } from 'src/app/listar-patinete/interfaces/patinete.interface';

@Injectable({
  providedIn: 'root'
})
export class AnadirpatineteService {

  constructor(private http:HttpClient) { }

  subirFichero(archivo:FormData,patinete:PatineteSubida){

    let token =localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const params=new HttpParams().set('modelo',patinete.modelo)
    .set('precioHora',patinete.precioHora)
    .set('disponible',patinete.disponible)
    .set('kmhora',patinete.kmhora)
    console.log(params);
    console.log(archivo.get('file'));
    let url="http://localhost:9000/subida";
    return this.http.post(url,archivo,{params})
  }


}
