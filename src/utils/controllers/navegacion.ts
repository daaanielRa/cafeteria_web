import router from '@/router'

/**
 * Metodo para redireccionar a diferentes funciones de la aplicación
 *
 * @param ruta la ruta que se quiere redireccionar
 */
export function redireccionar(ruta: string): void {
  router.push(ruta)
}
