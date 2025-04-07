import type { Timestamp } from 'firebase/firestore'

export interface Venta {
  fecha: Timestamp
  nombreProducto: string
  cantidad: number
  metodoPago: string
}

export interface Pedido {
  producto: string
  cantidad: number
  metodoPago: string
}
