import { FirebaseService } from '@/services/firebaseService'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import type { Producto } from '../types/productos'

/**
 * Metodo para actualizar la cantidad de un producto en la base de datos de **firestore**
 * @param id el id del producto a actualizar
 * @param actualizacionCantidad la cantidad del producto a actualizar
 */
async function actualizarProducto(id: string, actualizacionCantidad: number) {
  try {
    const prodRef = doc(FirebaseService.db, 'productos', id)
    const producto: Producto = (await getDoc(prodRef)).data() as Producto

    updateDoc(prodRef, { cantidad: producto.cantidad - actualizacionCantidad })
  } catch (error) {
    throw new Error('No se pudo actualizar la información del producto: ' + error)
  }
}

/**
 * Metodo para registrar la venta de un producto, realizando la actualización del producto en **firestore**
 * @param datos los datos de la venta a registrar
 * @param idProducto el id del producto que se vendió
 */
export async function registrarVenta(
  datos: { producto: string; cantidad: number; metodoPago: string },
  idProducto: string,
) {
  try {
    actualizarProducto(idProducto, datos.cantidad)

    await addDoc(collection(FirebaseService.db, 'ventas'), {
      fecha: Timestamp.fromDate(new Date()),
      producto: datos.producto,
      cantidad: datos.cantidad,
      metodoPago: datos.metodoPago,
    })
  } catch (error) {
    throw new Error('No se pudo registrar la venta: ' + error)
  }
}
