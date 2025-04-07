import type { Producto } from '@/utils/types/productos'
import { obtenerCelda } from '../controllers/tablas'
import { FirebaseService } from '@/services/firebase/firebaseService'

/**
 * Metodo para eliminar un producto desde **firestore**
 *
 * @todo revisar implementacion, ya que impide borrar el producto
 * @param evt el evento del click
 */
async function eliminar(evt: Event): Promise<void> {
  try {
    const nombreProducto: string = obtenerCelda(evt, '#nombre-producto').innerHTML
    // await FirebaseService.eliminarDocumento('productos', nombreProducto)
    console.warn(
      `Esta funcion presenta fallas y se está trabajando en solucionarlo.\nSe ha clickeado para eliminar: ${nombreProducto}`,
    )
  } catch (error) {
    alert('Error al eliminar el producto')
    console.error(error)
  }
}

/**
 * Metodo para modificar un producto desde **firestore**
 *
 * @todo falta por implementar, aún no se ha realizado el modal que contiene los campos para actualizar la info
 * @param evt el evento del click
 */
async function modificar(evt: Event): Promise<void> {
  try {
    const nombreProducto: string = obtenerCelda(evt, '#nombre-producto').innerHTML
    console.warn(`Función no implementada aún.\nse ha clickeado para modificar: ${nombreProducto}`)
  } catch (error) {
    alert('Error al modificar el producto')
    console.error(error)
  }
}

/**
 * Metodo para añadir un producto a **firestore**
 */
async function anadir(producto: Producto): Promise<void> {
  try {
    await FirebaseService.crearDocumento('productos', producto)
    alert('producto añadido')
  } catch (error) {
    alert('error al añadir el producto')
    console.error(error)
  }
}

export default { eliminar, modificar, anadir }
