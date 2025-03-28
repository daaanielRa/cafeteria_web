<script setup lang="ts">
import router from '@/router'
import { FirebaseService } from '@/services/firebaseService'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const formulario = ref({
  email: '',
  password: '',
})

async function iniciarSesion() {
  try {
    const usuario = await signInWithEmailAndPassword(
      FirebaseService.auth,
      formulario.value.email,
      formulario.value.password,
    )

    console.log(usuario.user.uid)
    router.push('/clientes')
  } catch (error) {
    alert('No autorizo')
    console.error(error)
  }
}
</script>

<template>
  <div id="container">
    <div class="app-card">
      <div class="bienvenida">
        <img src="/logo.png" alt="logo" width="30%" />
        <p class="titulo-modulo">Cafeteria Ycoffee</p>
        <p>¡Bienvenido! :D</p>
      </div>

      <form class="app-form" id="loginForm" @submit.prevent="iniciarSesion">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
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
        <div class="form-buttons">
          <button type="submit" class="app-button">Iniciar sesión</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="css">
.titulo-modulo {
  font-size: 2em;
  color: var(--primary-600);
}

.bienvenida {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.app-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  height: 400px;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.app-button {
  width: max-content;
  height: 30px;
}
</style>
