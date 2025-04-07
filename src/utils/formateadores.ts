/**
 * Metodo para formatear horarios
 *
 * @param entrada la hora de entrada del empleado
 * @param salida la hora de salida del empleado
 * @returns el horario formateado conteniendo año, mes, dia, horas y minutos
 */
export function horaEntrada_Salida(
  entrada: string,
  salida: string,
): { horarioEntrada: Date; horarioSalida: Date } {
  const [horasEntrada, minutosEntrada] = entrada.split(':').map(Number)
  const [horasSalida, minutosSalida] = salida.split(':').map(Number)
  const fecha: Date = new Date()
  const horarioEntradaFormateada: Date = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDay(),
    horasEntrada,
    minutosEntrada,
  )
  const horarioSalidaFormateada: Date = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDay(),
    horasSalida,
    minutosSalida,
  )

  return { horarioEntrada: horarioEntradaFormateada, horarioSalida: horarioSalidaFormateada }
}
