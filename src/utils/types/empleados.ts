import type { Timestamp } from 'firebase/firestore'

export interface Empleado {
  nombre: string
  correo: string
  cargo: string
  horario: { entrada: Timestamp; salida: Timestamp }
  tipo: string
}
