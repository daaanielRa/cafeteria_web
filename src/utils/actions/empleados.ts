import { FirebaseService } from '@/services/firebase/firebaseService'
import { obtenerCelda } from '../controllers/tablas'
import type { AnadirEmpleado } from '@/utils/types/formularios'
import { Timestamp } from 'firebase/firestore'
import { horaEntrada_Salida } from '@/utils/formateadores'
import regex from '../regex'
import { ErrorPermisos } from '../errores'

/**
 * Metodo para eliminar un empleado de **firestore**
 *
 * @todo verificar funcionalidad de eliminaciones fantasma dentro de firestore
 * @param evt el evento del click
 */
async function eliminar(evt: Event) {
  try {
    const celda = obtenerCelda(evt, '#nombre-empleado')
    const nombreEmpleado: string = celda.innerHTML

    alert('Esta funcion presenta fallas y se está trabajando en solucionarlo.')
    console.warn(`clickeado para modificar a ${nombreEmpleado}`)
    // FirebaseService.eliminarUsuario('usuarios', nombreEmpleado)
    // alert('se ha eliminado este usuario')
    // celda.parentElement?.remove()
  } catch (error) {
    alert(`No se pudo eliminar el empleado`)
    console.error(error)
  }
}

/**
 * Metodo para modificar un empleado en **firestore**
 *
 * @todo falta por implementar, aún no se ha realizado el modal que contiene los campos para actualizar la info
 * @param evt el evento del click
 */
async function modificar(evt: Event) {
  try {
    const nombreEmpleado: string = obtenerCelda(evt, '#nombre-empleado').innerHTML
    alert('Lo sentimos, la funcion no ha sido implementada aún.')
    console.warn(`clickeado para modificar a ${nombreEmpleado}`)
  } catch (error) {
    alert('Error al modificar el empleado')
    console.error(error)
  }
}

/**
 * Metodo para añadir un empleado a **firestore**
 *
 * @param datos el formulario para añadir el empleado
 */
async function anadir(datos: AnadirEmpleado): Promise<void> {
  try {
    if (!regex.correo.test(datos.correo)) throw new ErrorPermisos('El email no es valido')

    const formateo = horaEntrada_Salida(datos.horario.entrada, datos.horario.salida)
    const entrada: Date = formateo.horarioEntrada
    const salida: Date = formateo.horarioSalida

    await FirebaseService.crearUsuario(
      {
        nombre: datos.nombre,
        correo: datos.correo,
        cargo: datos.cargo,
        horario: {
          entrada: Timestamp.fromDate(entrada),
          salida: Timestamp.fromDate(salida),
        },
        tipo: datos.tipoUsuario.toLowerCase(),
      },
      datos.correo,
      datos.clave,
    )
    alert('empleado añadido')

    datos.nombre = ''
    datos.correo = ''
    datos.cargo = ''
    datos.horario.entrada = ''
    datos.horario.salida = ''
    datos.clave = ''
    datos.tipoUsuario = ''
  } catch (error) {
    alert('error al añadir el empleado.')
    console.error(error)
  }
}

export default { eliminar, modificar, anadir }
