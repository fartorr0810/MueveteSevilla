/**
 * Interfaz con los datos del patinete
 */
export interface Patinete{
  "idpatinete": number,
  "modelo": string,
  "precioHora": number,
  "disponible": boolean,
  "kmhora": number
}

export interface PatineteSubida{
  "modelo": string,
  "precioHora": number,
  "disponible": boolean,
  "kmhora": number
}

