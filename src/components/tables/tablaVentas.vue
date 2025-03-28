<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ventas = ref([{}, {}])

onMounted(async () => {})
</script>

<template>
  <div class="app-table" v-if="ventas.length > 1">
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Producto</th>
          <th>Mesa</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Método de pago</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venta in ventas" :key="venta.id">
          <td>{{ venta.fecha }}</td>
          <td>{{ venta.nombreProducto }}</td>
          <td>{{ venta.mesa }}</td>
          <td>{{ venta.cantidad }}</td>
          <td>{{ venta.total }}</td>
          <td>{{ venta.metodoPago }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else>Cargando ventas...</p>
</template>

<style scoped lang="css"></style>
