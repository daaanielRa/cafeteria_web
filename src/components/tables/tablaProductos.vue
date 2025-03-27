<script setup lang="ts">
import { FirebaseService } from '@/services/firebaseService'
import { eliminarDocumento } from '@/utils/eliminarDocumentoFireStore'
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
  const elm = evt.target

  const filaProducto: HTMLDivElement = elm?.parentElement.parentElement.parentElement

  const nombreProducto: string = filaProducto.querySelector('#nombre-producto')?.innerHTML as string

  await eliminarDocumento(nombreProducto, 'productos')

  filaProducto.remove()
}
</script>

<template>
  <div id="table-container" v-if="productos.length > 1">
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
              <button>actualizar</button>
              <button @click="eliminar">eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando productos...</p>
</template>

<style scoped lang="css">
#table-container {
  margin-top: 50px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #6d4c41;
  color: white;
}

td {
  background-color: #f9f9f9;
}

td div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

td div button {
  width: 100px;
  height: 30px;
  background-color: #6d4c41;
  border: none;
  border-radius: 10px;
  color: white;
}

td div button:hover {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #5d3e34;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>
