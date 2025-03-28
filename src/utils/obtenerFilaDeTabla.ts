/**
 * Obtiene el nombre de una celda en una tabla especifica
 * @param target el evento del boton
 * @param id el id del elemento que contiene el nombre a buscar
 * @returns el nombre de la celda en la tabla
 */
export function obtenerNombre(target: EventTarget, id: string): string {
  const fila: HTMLDivElement = target?.parentElement.parentElement.parentElement
  return fila.querySelector(id)?.innerHTML as string
}
