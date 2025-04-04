export function obtenerCelda(evt: Event, celdaId: string): HTMLElement {
  const target: HTMLElement = evt.target as HTMLElement
  const fila: HTMLElement = target.parentElement?.parentElement?.parentElement as HTMLElement
  return fila.querySelector(celdaId) as HTMLElement
}
