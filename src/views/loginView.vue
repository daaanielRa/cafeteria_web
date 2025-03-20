<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

/**
 * Esta variable almacena activamente el **email** y la **contraseña** del formulario
 */
const formulario = ref({
  email: '',
  password: '',
})

// esta funcion es lo mismo que href="/registros"
function registrarUsuario() {
  router.push('/registros')
}

function iniciarSesion() {
  // TODO Hacer la conexion con firebase
  alert(
    `intentando iniciar sesión con correo: ${formulario.value.email} y contraseña: ${formulario.value.password}`,
  )
}
</script>

<template>
  <div id="container">
    <div class="login-container">
      <h2>Cafeteria Ycoffee</h2>
      <p>Bienvenido a Ycoffee :D, porfavor, inicia sesión</p>

      <!--? submit.prevent="iniciarSesion" hace que el formulario se envie pero no recargue la pagina-->
      <form id="loginForm" @submit.prevent="iniciarSesion">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <!--? el v-model hace que cualquier cosa que se escriba en el input se almacene en la variable formulario.email -->
          <input type="email" id="email" v-model="formulario.email" required />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="formulario.password"
            required
            minlength="8"
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <p class="register-link">¿No tienes cuenta? <a @click="registrarUsuario">Regístrate</a></p>

      <p id="error-message" class="error-message"></p>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

#container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Contenedor del login */
.login-container {
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 380px;
  border: 2px solid #5d4037;
}

/* Logo o título */
h2 {
  font-size: 26px;
  font-weight: bold;
  color: #6d4c41;
  font-family: 'Poppins', sans-serif;
}

p {
  color: #8d6e63;
  font-size: 14px;
}

/* Estilo de los campos */
.input-group {
  margin: 15px 0px;
  padding-right: 15px;
  text-align: left;
}

label {
  display: block;
  font-size: 14px;
  color: #5d4037;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d7ccc8;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f3e5d8;
  color: #5d4037;
}

input:focus {
  outline: none;
  border: 2px solid #a1887f;
}

/* Botón de login */
button {
  width: 102%;
  padding: 12px;
  background: #6d4c41;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: #5d4037;
}

/* Enlace de registro */
.register-link {
  margin-top: 10px;
  font-size: 14px;
}

.register-link a {
  color: #6d4c41;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Mensaje de error */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

/* Responsivo */
@media (max-width: 400px) {
  .login-container {
    width: 90%;
  }
}
</style>
