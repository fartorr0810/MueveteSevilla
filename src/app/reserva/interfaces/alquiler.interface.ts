/**
 * Interfaz Alquiler
 */
export interface AlquilerI{
  horaentrega:Date,
  horasalquiler:number,
  patinete:number,
  user:number
}
/**
 * Interfaz para calcular el alquiler
 */
export interface CalcularAlquiler{
  horaentrega:string,
  horasalquiler:number,
  patinete:number,
  horarecogida:string,
  preciototal:number
}
/**
 * Interfaz cuando vamos a listar alquileres
 */
export interface ListaAlquilerI{
  idalquiler:number,
  horaentrega:string,
  modelo:string,
  horasalquiler:number,
  preciototal:string,
  horarecogida:string,
  entregado:boolean
}


