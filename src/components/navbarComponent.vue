<script setup lang="ts">
import router from '@/router'

function navegar(ruta: string) {
  router.push(ruta)
}

const user = {
  isAdmin: true,
}
</script>

<template>
  <div>
    <nav>
      <a @click="navegar('/pedidos')">Pedido</a>
      <a v-if="user.isAdmin" @click="navegar('/inventario')">Inventario</a>
      <a v-if="user.isAdmin" @click="navegar('/historiaventas')">Historial de ventas</a>
      <a v-if="user.isAdmin" @click="navegar('/empleados')">Empleados</a>
    </nav>
    <button class="app-button">cerrar sesion</button>
  </div>
</template>

<style scoped lang="css">
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--background-50);
  width: 100%;
  height: 50px;
  z-index: 1000;
  box-shadow: 0 2px 5px var(--primary-200);
}

nav a {
  font-size: 16px;
  padding: 10px 20px;
  display: inline-block;
  text-align: center;
  position: relative;
  line-height: 40px;
}

nav a:hover {
  cursor: pointer;
}

nav a::after {
  content: '';
  display: flex;
  width: 0;
  height: 4px;
  background-color: var(--primary-500);
  transition: width 0.3s ease-in-out;
}

nav a:hover::after {
  width: 100%; /* Línea para todo el a:hover */
}
</style>
