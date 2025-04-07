<script setup lang="ts">
import { useUsuarioActualStore } from '@/stores/usuario/UsuarioActual'
import { redireccionar } from '@/utils/controllers/navegacion'
import sesion from '@/utils/controllers/sesion'

const usuarioAdministrador: boolean = useUsuarioActualStore().administrador
const usuarioActual: string = useUsuarioActualStore().nombre
</script>

<template>
  <div>
    <span>
      <img src="/logo.png" alt="logo" />
      <p>¡Hola, {{ usuarioActual }}!</p>
    </span>
    <nav>
      <a @click="redireccionar('/pedidos')">
        <span class="material-symbols-outlined"> shopping_cart </span>
        Pedido
      </a>
      <div class="admin" v-if="usuarioAdministrador">
        <a @click="redireccionar('/inventario')">
          <span class="material-symbols-outlined">inventory</span>
          Inventario
        </a>
        <a @click="redireccionar('/historiaventas')">
          <span class="material-symbols-outlined">manage_search</span>
          Historial de ventas
        </a>
        <a @click="redireccionar('/empleados')">
          <span class="material-symbols-outlined">person_apron</span>
          Empleados
        </a>
      </div>
    </nav>
    <button class="app-button" @click="sesion.cerrar">
      <span class="material-symbols-outlined">exit_to_app</span>
      cerrar sesion
    </button>
  </div>
</template>

<style scoped lang="css">
div {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: var(--background-50);
  height: 50px;
  z-index: 100;
  box-shadow: 0 2px 5px var(--primary-200);
}

nav {
  display: flex;
  align-items: center;
}

.admin {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: none;
}

nav a {
  font-size: 16px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  position: relative;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 150px;
}

nav a:hover {
  cursor: pointer;
}

nav a::after {
  content: '';
  display: flex;
  position: absolute;
  bottom: 0;
  margin: 0 0 5px 0;
  width: 0;
  height: 4px;
  background-color: var(--primary-500);
  transition: width 0.3s ease-in-out;
}

nav a:hover::after {
  width: 100%; /* Línea para todo el a:hover */
}

span {
  display: flex;
  align-items: center;
}

span img {
  width: 8%;
}
</style>
