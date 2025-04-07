export class ErrorSesion extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SESIÓN'
    this.stack = ''
  }
}

export class ErrorBaseDatos extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BASE DE DATOS'
    this.stack = ''
  }
}

export class ErrorPermisos extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'INSUFICIENTES PERMISOS'
    this.stack = ''
  }
}
