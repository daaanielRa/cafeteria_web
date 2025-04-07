import type { ProductoDisponible } from '@/utils/types/productos'
import { registrarVenta } from '../controllers/pedidos'
import type { Pedido } from '@/utils/types/ventas'

/**
 * Metodo para ordenar un pedido y almacenarlo en **firestore**
 *
 * @param productosDisponibles la lista de productos disponibles
 * @param pedido el pedido que se ha realizado
 */
async function ordenar(productosDisponibles: ProductoDisponible[], pedido: Pedido): Promise<void> {
  try {
    const productoSeleccionado = productosDisponibles.find(
      (prod) => prod.nombre === pedido.producto,
    )

    if (pedido.cantidad > (productoSeleccionado?.cantidad || 0))
      throw new Error('Se ha seleccionado una cantidad superior a la disponible')

    registrarVenta(pedido, productoSeleccionado?.id || '')

    alert('se realizó el pedido')
  } catch (error) {
    alert('no se pudo hacer el pedido')
    console.error(error)
  }
}

export default { ordenar }
