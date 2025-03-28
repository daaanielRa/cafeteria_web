<script setup lang="ts">
import { FirebaseService } from '@/services/firebaseService'
import { eliminarDocumento } from '@/utils/eliminarDocumentoFireStore'
import { obtenerNombre } from '@/utils/obtenerFilaDeTabla'
import type { Producto } from '@/utils/types/productos'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref, type Ref } from 'vue'

const productos: Ref<Producto[]> = ref([])

onMounted(async () => {
  const col = collection(FirebaseService.db, 'productos')

  const snapshot = await getDocs(col)

  productos.value = snapshot.docs.map((producto) => ({
    nombre: producto.data().nombre,
    cantidad: producto.data().cantidad,
    precio: producto.data().precio,
  }))
})

async function eliminar(evt: Event) {
  try {
    if (evt.target) {
      const nombreProducto: string = obtenerNombre(evt.target, '#nombre-producto')
      await eliminarDocumento(nombreProducto, 'productos')
    }
  } catch (error) {
    alert('Error al eliminar el producto')
    console.error(error)
  }
}

async function modificar(evt: Event) {
  try {
    if (evt.target) {
      const nombreProducto: string = obtenerNombre(evt.target, '#nombre-producto')

      alert('falta implementar')
      console.log(nombreProducto)
    }
  } catch (error) {
    alert('Error al modificar el producto')
    console.error(error)
  }
}
</script>

<template>
  <div class="app-table" v-if="productos.length > 1">
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
        <tr v-for="producto in productos" :key="producto.nombre">
          <td id="nombre-producto">{{ producto.nombre }}</td>
          <td>{{ producto.cantidad }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <div>
              <button @click="modificar" class="app-button">actualizar</button>
              <button @click="eliminar" class="app-button">eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando productos...</p>
</template>

<style scoped lang="css"></style>
