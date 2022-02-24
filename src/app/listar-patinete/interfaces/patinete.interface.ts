import { Byte } from "@angular/compiler/src/util"

/**
 * Interfaz con los datos del patinete
 */
export interface Patinete{
  "idpatinete": number,
  "modelo": string,
  "precioHora": number,
  "disponible": boolean,
  "kmhora": number,
  "imagen":Byte[]
}

export interface PatineteSubida{
  "modelo": string,
  "precioHora": number,
  "disponible": boolean,
  "kmhora": number
}

