<script setup lang="ts">
import { FirebaseService } from '@/services/firebaseService'
import { obtenerCelda } from '@/utils/handlers/tablas'
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

async function eliminarProducto(evt: Event) {
  try {
    const nombreProducto: string = obtenerCelda(evt, '#nombre-producto').innerHTML
    await FirebaseService.eliminarDocumento('productos', nombreProducto)
  } catch (error) {
    alert('Error al eliminar el producto')
    console.error(error)
  }
}

async function modificarProducto(evt: Event) {
  try {
    const nombreProducto: string = obtenerCelda(evt, '#nombre-producto').innerHTML
    alert('se va a editar' + nombreProducto)
  } catch (error) {
    alert('Error al modificar el producto')
    console.error(error)
  }
}
</script>

<template>
  <div class="app-table" v-if="productos.length > 0">
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
        <tr v-for="(producto, index) in productos" :key="index">
          <td id="nombre-producto">{{ producto.nombre }}</td>
          <td>{{ producto.cantidad }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <div>
              <button @click="modificarProducto" class="app-button">actualizar</button>
              <button @click="eliminarProducto" class="app-button">eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando productos...</p>
</template>

<style scoped lang="css"></style>
