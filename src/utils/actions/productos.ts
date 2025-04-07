import type { Producto } from '@/utils/types/productos'
import { obtenerCelda } from '../controllers/tablas'
import { FirebaseService } from '@/services/firebase/firebaseService'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { ErrorBaseDatos } from '../errores'

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
 * Metodo para obtener un producto desde **firestore**
 *
 * @todo falta por implementar, aún no se ha realizado el modal que contiene los campos para actualizar la info
 * @param evt el evento del click
 */
async function obtenerInfo(evt: Event): Promise<Producto> {
  try {
    const nombreProducto: string = obtenerCelda(evt, '#nombre-producto').innerHTML

    const col = collection(FirebaseService.db, 'productos')
    const q = query(col, where('nombre', '==', nombreProducto))
    const snapshot = await getDocs(q)
    return snapshot.docs.map((prod) => ({
      nombre: prod.data().nombre,
      cantidad: prod.data().cantidad,
      precio: prod.data().precio,
    }))[0]
  } catch (error) {
    throw new ErrorBaseDatos(error as string)
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

/**
 * Metodo para modificar un producto en **firestore**
 * @param producto la información del producto editado
 * @param productoOriginal el nombre del producto a editar
 */
async function modificar(producto: Producto, productoOriginal: string): Promise<void> {
  try {
    const col = collection(FirebaseService.db, 'productos')
    const q = query(col, where('nombre', '==', productoOriginal))
    const productos = await getDocs(q)
    const id = productos.docs[0].id

    const prodRef = doc(FirebaseService.db, 'productos', id)
    await updateDoc(prodRef, {
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      precio: producto.precio,
    })
  } catch (error) {
    throw new ErrorBaseDatos(error as string)
  }
}

export default { eliminar, obtenerInfo, anadir, modificar }
