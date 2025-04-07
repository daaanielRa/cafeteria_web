export interface AnadirEmpleado {
  nombre: string
  correo: string
  cargo: string
  horario: { entrada: string; salida: string }
  clave: string
  tipoUsuario: string
}

export interface ModificarEmpleado {
  nombre: string
  correo: string
  cargo: string
  horario: { entrada: string; salida: string }
  tipoUsuario: string
}
