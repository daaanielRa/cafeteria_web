<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaVentas from '@/components/tables/tablaVentas.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="tabla app-card">
        <p class="titulo-modulo">Historial de ventas</p>
        <TablaVentas />
      </div>
    </template>
  </PageBase>
</template>
