<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import { FirebaseService } from '@/services/firebaseService'
import { registrarVenta } from '@/utils/handlers/pedidos'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { computed, onMounted, ref, type Ref } from 'vue'

const productosDisponibles: Ref<
  { id: string; nombre: string; precio: number; cantidad: number }[]
> = ref([])
const pedido = ref({
  producto: '',
  cantidad: 0,
  metodoPago: '',
})
const total = computed(() => {
  const producto = productosDisponibles.value.find(
    (producto) => producto.nombre === pedido.value.producto,
  )
  const precio: number = producto?.precio || 1

  return precio * pedido.value.cantidad
})

onMounted(async () => {
  const col = collection(FirebaseService.db, 'productos')
  const q = query(col, where('cantidad', '>', 0))
  productosDisponibles.value = (await getDocs(q)).docs.map((producto) => ({
    id: producto.id,
    nombre: producto.data().nombre,
    precio: producto.data().precio,
    cantidad: producto.data().cantidad,
  }))
})

async function realizarPedido() {
  try {
    const productoSeleccionado = productosDisponibles.value.find(
      (prod) => prod.nombre === pedido.value.producto,
    )

    if (pedido.value.cantidad > (productoSeleccionado?.cantidad || 0))
      throw new Error('Se ha seleccionado una cantidad superior a la disponible')

    registrarVenta(pedido.value, productoSeleccionado?.id || '')

    alert('se realizó el pedido')
  } catch (error) {
    alert('no se pudo hacer el pedido')
    console.error(error)
  }
}
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <h2 class="titulo-modulo">Formulario de Pedido</h2>

        <form class="app-form" @submit.prevent="realizarPedido">
          <div>
            <label for="producto">Selecciona el Producto:</label>
            <select id="producto" name="producto" v-model="pedido.producto" required>
              <option selected hidden></option>
              <option v-for="(producto, index) in productosDisponibles" :key="index">
                {{ producto.nombre }}
              </option>
            </select>
          </div>
          <div>
            <label for="cantidad">Cantidad:</label>
            <input
              type="number"
              v-model="pedido.cantidad"
              id="cantidad"
              name="cantidad"
              max="50"
              min="1"
              required
            />
          </div>

          <div>
            <label for="metodo_pago">Método de Pago:</label>
            <select id="metodo_pago" name="metodo_pago" v-model="pedido.metodoPago" required>
              <option value="" selected hidden></option>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta_credito">Tarjeta de crédito</option>
              <option value="tarjeta_debito">Tarjeta de débito</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </div>

          <div>
            <label for="total">Total:</label>
            <input type="text" id="total" name="total" disabled :value="'$' + total" />
          </div>

          <div class="form-buttons">
            <button class="app-button" type="submit">Realizar Pedido</button>
          </div>
        </form>
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.app-card {
  width: 600px;
}

.app-button {
  width: max-content;
}
</style>
