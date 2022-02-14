import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ControlAccesoService } from './control-acceso/services/control-acceso.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private serviciocontrol:ControlAccesoService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {
    return this.serviciocontrol.comprobarToken()
    .pipe(
        map( resp => {
          return true;
        }),
        catchError( err => {
            Swal.fire({
              title: 'El token ha expirado, renuevalo',
              text: 'Inicia sesion',
              icon: 'error',
              confirmButtonText: 'Ok'
            })

            this.router.navigateByUrl('/login');
            return of(false)
        })
      )
  }

}
