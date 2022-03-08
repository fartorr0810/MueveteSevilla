import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailvalidatorService implements AsyncValidator{
  
  private url: string = environment.baseURL;

  constructor( private httpClient: HttpClient ) { }

  validate(correo: AbstractControl): Observable<ValidationErrors | null> {
    const email = correo.value;

    return this.comprobarEmail(email).pipe(
      map (resp => {
        if(resp.email != null){
           return {emailenuso: true};
        }else{
         return null;
        }
      }),
      catchError (err => {
         return of(null);
      })
    );
   }

comprobarEmail(email:string){
  const url = `${this.url}user/${email}`;
  const httpHeaders=new HttpHeaders()
  httpHeaders.append('Access-Control-Allow-Origin','*');
  return this.httpClient.get<UsuarioLogin>(url,{headers :httpHeaders});
}

}
