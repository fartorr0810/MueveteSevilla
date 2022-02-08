import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})

export class ControlAccesoService {
  //Esto va en envoirements
  private url:string="http://localhost:9000";

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    let direccionurl=this.url+"/auth/login";

    let bodypeticion={
      'email':email,
      'password':password
    }
    return this.http.post<AuthResponse>(direccionurl,bodypeticion);
  }

  comprobarToken():Observable <AuthResponse>{
    let direccionurl="http://localhost:9000/user";
    let headers=new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}` || '');
    return this.http.get<AuthResponse>(direccionurl,{headers});
  }
  //TODO hacer interfaz usuario
  register(email:string,password:string,username:string,name:string){
    let direccionurl="http://localhost:9000/auth/register";
    let bodypeticion={
      'email':email,
      'password':password,
      'name':name,
      'username':username
      }
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('Access-Control-Allow-Origin','*');
    //httpHeaders.append('Access-Control-Allow-Origin','*');
    //httpHeaders.append('Content-Type','application/json')
    //httpHeaders.append('Authorization','authkey');
    return this.http.post<AuthResponse>(direccionurl,bodypeticion,{ headers: httpHeaders});
  }
}
