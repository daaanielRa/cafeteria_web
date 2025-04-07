<script setup lang="ts">
import { FirebaseService } from '@/services/firebase/firebaseService'
import type { Producto } from '@/utils/types/productos'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref, type Ref } from 'vue'
import productos from '@/utils/actions/productos'

onMounted(async () => {
  const col = collection(FirebaseService.db, 'productos')

  const snapshot = await getDocs(col)

  productosDisponibles.value = snapshot.docs.map((producto) => ({
    nombre: producto.data().nombre,
    cantidad: producto.data().cantidad,
    precio: producto.data().precio,
  }))

  productosDisponibles.value.sort((a, b) => a.nombre.localeCompare(b.nombre))
})

const productosDisponibles: Ref<Producto[]> = ref([])
</script>

<template>
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
              <button @click="productos.modificar" class="app-button">
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
