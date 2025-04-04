<script setup lang="ts">
import { FirebaseService } from '@/services/firebaseService'
import type { Venta } from '@/utils/types/ventas'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref, type Ref } from 'vue'

const ventas: Ref<Venta[]> = ref([])

onMounted(async () => {
  const col = collection(FirebaseService.db, 'ventas')

  const snapshot = await getDocs(col)

  ventas.value = snapshot.docs.map((venta) => ({
    fecha: venta.data().fecha,
    nombreProducto: venta.data().producto,
    cantidad: venta.data().cantidad,
    metodoPago: venta.data().metodoPago,
  }))

  console.log(ventas.value)
})
</script>

<template>
  <div class="app-table" v-if="ventas.length > 0">
    <table>
      <thead>
        <tr>
          <th>Fecha y hora</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Método de pago</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venta, index) in ventas" :key="index">
          <td>
            {{ venta.fecha.toDate().toLocaleDateString() }} -
            {{ venta.fecha.toDate().toLocaleTimeString() }}
          </td>
          <td>{{ venta.nombreProducto }}</td>
          <td>{{ venta.cantidad }}</td>
          <td>{{ venta.metodoPago }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando ventas...</p>
</template>
