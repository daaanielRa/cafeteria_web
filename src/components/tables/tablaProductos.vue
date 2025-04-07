<script setup lang="ts">
import { FirebaseService } from '@/services/firebase/firebaseService'
import type { Producto } from '@/utils/types/productos'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import productos from '@/utils/actions/productos'
import ModificarProducto from '../modales/modificarProducto.vue'

onMounted(async () => {
  const col = collection(FirebaseService.db, 'productos')

  const snapshot = await getDocs(col)

  productosDisponibles.value = snapshot.docs.map((producto) => ({
    nombre: producto.data().nombre,
    cantidad: producto.data().cantidad,
    precio: producto.data().precio,
  }))

  productosDisponibles.value.sort((a, b) => a.nombre.localeCompare(b.nombre))

  console.warn('Estado modal:' + estadoModal.value)
})

const productosDisponibles = ref<Producto[]>([])
const productoAModificar = ref<Producto>({
  nombre: 'Algun producto aleatorio',
  cantidad: 10,
  precio: '2000',
})
const estadoModal = ref<boolean>(true)

async function obtenerProducto(evt: Event) {
  productoAModificar.value = await productos.obtenerInfo(evt)

  estadoModal.value = false
}

function cerrarModal() {
  estadoModal.value = !estadoModal.value
}
</script>

<template>
  <ModificarProducto
    :producto-a-modificar="productoAModificar"
    @cerrar-modal="cerrarModal"
    v-if="!estadoModal"
  />

  <div class="app-table" v-if="productosDisponibles.length > 0">
    <table border="1">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in productosDisponibles" :key="index">
          <td id="nombre-producto">{{ producto.nombre }}</td>
          <td>{{ producto.cantidad }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <div>
              <button @click="obtenerProducto" class="app-button">
                <span class="material-symbols-outlined"> edit_square </span> actualizar
              </button>
              <button @click="productos.eliminar" class="app-button">
                <span class="material-symbols-outlined"> delete </span>
                eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando productos...</p>
</template>

<style lang="css" scoped>
.modal-hidden {
  opacity: 0;
  display: none;
  z-index: -1000;
  pointer-events: none;
}
</style>
