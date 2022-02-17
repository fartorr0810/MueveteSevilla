export interface AlquilerI{
  horaentrega:Date,
  horasalquiler:number,
  patinete:number,
  user:number
}
export interface CalcularAlquiler{
  horaentrega:string,
  horasalquiler:number,
  patinete:number,
  horarecogida:string,
  preciototal:number
}
