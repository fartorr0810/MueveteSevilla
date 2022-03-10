import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() fecha!: Date;
  saludo:string="";
  rol:string=localStorage.getItem('rol')!;
  constructor(private router:Router,
    private rutaactiva: ActivatedRoute) { }
  /**
   * Metodo para indicar si eres Administrador, Usuario o invitado.
   */
   fontSize = 14;

  bienvenida(){
    if (this.rol==""){
      this.saludo="Login"
    }
    if (this.rol=="Admin"){
      this.saludo="Administrador"
    }
    if (this.rol=="User"){
      this.saludo="Usuario"
    }
    if (this.rol==""){
      this.saludo="Usuario"
    }

  }

/**
 * Comprobamos el rol del usuario al iniciar
 */
  ngOnInit(): void {
    this.bienvenida();
    this.rutaactiva.queryParams.subscribe(params=>{
      this.rol=params['roll']
    })
  }
  ngOnChanges(){
  }
/**
 * Metodo para cerrar la sesion al limpiar el localStorage, si estas logueado lo limpia y te manda al home
 * si no , indicara que no hay ninguna sesion activa
 */
 refreshComponent(){
  this.router.navigate([this.router.url])
}
  cerrarSesion(){
    if (localStorage.getItem('idusuario')!=null){
    this.router.navigateByUrl('/home')
    this.rol='';
    }else{
      Swal.fire({
        title: 'No hay ninguna sesión activa',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    }
    localStorage.clear();
    this.router.navigateByUrl('/home')
  }
  changeFont(operator:any){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
