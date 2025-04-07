import type { Producto } from '@/utils/types/productos'
import { obtenerCelda } from '../controllers/tablas'
import { FirebaseService } from '@/services/firebase/firebaseService'

/**
 * Metodo para eliminar un producto desde **firestore**
 *
 * @param evt el evento del click
 */
async function eliminar(evt: Event): Promise<void> {
  try {
    const celda: HTMLElement = obtenerCelda(evt, '#nombre-producto')
    const nombreProducto: string = celda.innerHTML
    await FirebaseService.eliminarDocumento('productos', nombreProducto)
    alert('Se ha eliminado el producto')
    celda.parentElement?.remove()
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
    alert('Lo sentimos, la funcion no ha sido implementada aún.')
    console.warn(`se ha clickeado para modificar: ${nombreProducto}`)
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

    producto.nombre = ''
    producto.cantidad = 1
    producto.precio = ''
  } catch (error) {
    alert('error al añadir el producto')
    console.error(error)
  }
}

export default { eliminar, modificar, anadir }
