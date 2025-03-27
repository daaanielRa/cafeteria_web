<script setup lang="ts">
import NavbarComponent from '@/components/navbarComponent.vue'
import { ref } from 'vue'
import PageBase from '@/components/layout/pageBase.vue'

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
    <section class="clientcontainer">
      <div class="card">
        <h2>Gestión de Clientes</h2>
        <form @submit.prevent="gestionarUsuario">

          
          <div>
            <label for="Nombre">Nombre:</label>
            <input
              type="text"
              v-model="cliente.nombre"
              id="Nombre"
              placeholder="Nombre"
              class="font-poppins"
              required
            />
          </div>

          <div>
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              v-model="cliente.correo"
              id="correo"
              placeholder="Correo Electrónico"
              class="font-poppins"
              required
            />
          </div>

          <div>
            <label for="contraseña">Contraseña:</label>
            <input
              type="password"
              v-model="cliente.contraseña"
              id="contraseña"
              placeholder="Contraseña"
              class="font-poppins"
              required
              minlength="8"
            />
          </div>

          <div class="container-buttom">
            <button type="submit" name="accion" value="agregar" class="font-poppins">
              Agregar
            </button>
            <button type="submit" name="accion" value="modificar" class="font-poppins">
              Modificar
            </button>
            <button type="submit" name="accion" value="eliminar" class="font-poppins">
              Eliminar
            </button>
          </div>
        </form>
      </div>
    </section>
  </menu>
</template>

<style scoped lang="css">
.clientcontainer {
  width: 100dvw;
  height: 80dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clientcontainer .card {
  background-color: white;
  padding: 25px;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.container-buttom {
  display: flex;
  justify-content: center;
  gap: 20px;
}

form div {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid #d7ccc8;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f3e5d8;
  color: #5d4037;
}

.container-buttom {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.container-buttom button {
  width: 100px;
  height: 30px;
  background-color: #6d4c41;
  border: none;
  border-radius: 10px;
  color: white;
}

.container-buttom button:hover {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #5d3e34;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>
