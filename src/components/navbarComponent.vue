<script setup lang="ts">
import router from '@/router'
import { FirebaseService } from '@/services/firebaseService'
import { useUsuarioActualStore } from '@/stores/UsuarioActual'
import { signOut } from 'firebase/auth'

const usuarioAdministrador: boolean = useUsuarioActualStore().administrador

function navegar(ruta: string): void {
  router.push(ruta)
}

async function cerrarSesion(): Promise<void> {
  try {
    await signOut(FirebaseService.auth)
    useUsuarioActualStore().cerrarSesion()
    router.push('/')
  } catch (error) {
    alert('no se pudo cerrar sesión' + error)
  }
}
</script>

<template>
  <div>
    <nav>
      <a @click="navegar('/pedidos')">Pedido</a>
      <div class="admin" v-if="usuarioAdministrador">
        <a @click="navegar('/inventario')">Inventario</a>
        <a @click="navegar('/historiaventas')">Historial de ventas</a>
        <a @click="navegar('/empleados')">Empleados</a>
      </div>
    </nav>
    <button class="app-button" @click="cerrarSesion">cerrar sesion</button>
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
