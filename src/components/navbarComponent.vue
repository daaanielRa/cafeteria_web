<script setup lang="ts">
import router from '@/router'

function navegar(ruta: string) {
  router.push(ruta)
}
</script>

<template>
  <div>
  <nav>
    <a @click="navegar('/pedidos')">Pedido</a>
    <a @click="navegar('/inventario')">Inventario</a>
    <a @click="navegar('/historiaventas')">Historial de ventas</a>
    <a @click="navegar('/empleados')">Empleados</a>
    <a @click="navegar('/clientes')">Clientes</a>
  </nav>

  <button>cerrar sesion</button>
  </div>
</template>

<style scoped lang="css">
div {
display: flex;
  justify-content: center;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

}

nav {
  }
nav a {
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #6f4f37;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  position: relative;
  line-height: 40px;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #6f4f37;
}

nav a:hover::after {
  width: 100%;
  /* Línea para todo el a:hover */
}
</style>
