<script setup lang="ts">
import NavbarComponent from '@/components/navbarComponent.vue'
import { ref } from 'vue'

const cliente = ref({
  nombre: '',
  correo: '',
  contraseña: '',
})

function gestionarUsuario() {}
</script>

<template>
  <NavbarComponent />
  <menu class="menu">
    <h2>Gestión de Clientes</h2>
    <form @submit.prevent="gestionarUsuario">
      <label for="Nombre">Nombre:</label>
      <input type="text" v-model="cliente.nombre" id="Nombre" placeholder="Nombre" required />

      <label for="correo">Correo Electrónico:</label>
      <input
        type="email"
        v-model="cliente.correo"
        id="correo"
        placeholder="Correo Electrónico"
        required
      />

      <label for="contraseña">Contraseña:</label>
      <input
        type="password"
        v-model="cliente.contraseña"
        id="contraseña"
        placeholder="Contraseña"
        required
        minlength="8"
      />

      <div class="container-buttom">
        <button type="submit" name="accion" value="agregar">Agregar</button>
        <button type="submit" name="accion" value="modificar">Modificar</button>
        <button type="submit" name="accion" value="eliminar">Eliminar</button>
      </div>
    </form>
  </menu>
</template>

<style scoped lang="css">
.container-buttom {
  display: flex;
  justify-content: center;
  gap: 20px;
}

input {
  background-color: white;
}

.menu {
  margin-top: 1px;
}
</style>
