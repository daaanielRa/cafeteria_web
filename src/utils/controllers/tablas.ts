/**
 * Metodo para obtener una celda dentro de una tabla
 *
 * @param evt el evento del click
 * @param celdaId el nombre de la celda a buscar
 * @returns la celda encontrada como un `HTMLElement`
 */
export function obtenerCelda(evt: Event, celdaId: string): HTMLElement {
  const target: HTMLElement = evt.target as HTMLElement
  const fila: HTMLElement = target.parentElement?.parentElement?.parentElement as HTMLElement
  return fila.querySelector(celdaId) as HTMLElement
}
