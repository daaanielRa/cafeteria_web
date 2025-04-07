<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import { FirebaseService } from '@/services/firebase/firebaseService'
import pedidos from '@/utils/actions/pedidos'
import type { ProductoDisponible } from '@/utils/types/productos'
import type { Pedido } from '@/utils/types/ventas'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue'

onMounted(async () => {
  const col = collection(FirebaseService.db, 'productos')
  const q = query(col, where('cantidad', '>', 0))
  const productoListener = onSnapshot(q, (snapshot) => {
    productosDisponibles.value = snapshot.docs.map((producto) => ({
      id: producto.id,
      nombre: producto.data().nombre,
      precio: producto.data().precio,
      cantidad: producto.data().cantidad,
    }))
  })

  productosDisponibles.value.sort((a, b) => a.nombre.localeCompare(b.nombre))

  onUnmounted(() => {
    productoListener()
  })
})

const productosDisponibles: Ref<ProductoDisponible[]> = ref([])
const pedido: Ref<Pedido> = ref({
  producto: '',
  cantidad: 0,
  metodoPago: '',
})
const total = computed(() => {
  const producto = productosDisponibles.value.find(
    (producto) => producto.nombre === pedido.value.producto,
  )

  const precio: number = producto?.precio || 1

  const metodoPago: number =
    pedido.value.metodoPago === 'tarjeta credito' || pedido.value.metodoPago === 'tarjeta debito'
      ? precio * 0.1
      : 0

  return precio * pedido.value.cantidad + metodoPago
})
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <div v-if="productosDisponibles.length > 0">
          <h2 class="titulo-modulo">Formulario de Pedido</h2>
          <form class="app-form" @submit.prevent="pedidos.ordenar(productosDisponibles, pedido)">
            <div>
              <label for="producto">Selecciona el Producto:</label>
              <select id="producto" name="producto" v-model="pedido.producto" required>
                <option v-for="(producto, index) in productosDisponibles" :key="index">
                  {{ producto.nombre }}
                </option>
                <option selected hidden v-if="productosDisponibles.length == 0">
                  No hay productos disponibles
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
                <option value="tarjeta credito">Tarjeta de crédito</option>
                <option value="tarjeta debito">Tarjeta de débito</option>
                <option value="transferencia">Transferencia</option>
              </select>
            </div>
            <div>
              <label for="total">Total:</label>
              <input type="text" id="total" name="total" disabled :value="'$' + total" />
            </div>
            <div class="form-buttons">
              <button class="app-button" type="submit">
                <span class="material-symbols-outlined"> shopping_cart_checkout </span>
                Realizar Pedido
              </button>
            </div>
          </form>
        </div>
        <div v-else>
          <p>No hay productos disponibles por el momento</p>
        </div>
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
