import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})

export class ControlAccesoService {
  //Esto va en envoirements
  private url:string="http://localhost:8000/";

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    let direccionurl=this.url+"login";

    let bodypeticion={
      'email':email,
      'password':password
    }
    return this.http.post<AuthResponse>(direccionurl,bodypeticion);
  }

  comprobarToken():Observable <AuthResponse>{
    let direccionurl=this.url+"/home";
    let headers=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('arl')}`||'');
    return this.http.get<AuthResponse>(direccionurl,{headers});
  }
}
