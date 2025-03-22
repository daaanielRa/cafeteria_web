<script setup lang="ts">
import router from '@/router'
import { FirebaseService } from '@/services/firebaseService'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { ref } from 'vue'

const usuarioARegistrar = ref({
  name: '',
  email: '',
  password: '',
  passwordCheck: '',
})

async function registrarUsuario() {
  try {
    const credenciales = await createUserWithEmailAndPassword(
      FirebaseService.auth,
      usuarioARegistrar.value.email,
      usuarioARegistrar.value.password,
    )

    const uid = await credenciales.user.uid

    const userRef = doc(FirebaseService.db, 'usuarios', uid)

    await setDoc(userRef, {
      name: usuarioARegistrar.value.name,
      email: usuarioARegistrar.value.email,
    })

    alert('usuario creado')
  } catch (error) {
    alert('error al crear usuarios')
    console.error(error)
  }

  alert('usuario registrandose')
}

function iniciarSesion() {
  router.push('/')
}
</script>

<template>
  <div class="container">
    <div class="register-container">
      <h2>Regístrate en Cafeteria Ycoffee</h2>
      <form id="registerForm" @submit.prevent="registrarUsuario">
        <div class="input-group">
          <label for="nombre">Nombre Completo</label>
          <input
            type="text"
            v-model="usuarioARegistrar.name"
            id="nombre"
            placeholder="Nombre"
            required
          />
        </div>

        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            v-model="usuarioARegistrar.email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            v-model="usuarioARegistrar.password"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>

        <div class="input-group">
          <label for="confirm-password">Confirmar Contraseña</label>
          <input
            type="password"
            v-model="usuarioARegistrar.passwordCheck"
            id="confirm-password"
            placeholder="Contraseña"
            required
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>

      <p class="login-link">¿Ya tienes cuenta? <a @click="iniciarSesion">Inicia sesión</a></p>

      <p id="error-message" class="error-message"></p>
    </div>
  </div>
</template>

<style scoped lang="css">
body {
  background-color: #f3e5d8;
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
}

#container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-container {
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 380px;
  border: 2px solid #d2b48c;
}

.register-container {
  justify-content: center;
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
  background-color: #faefe5;
  color: #5d4037;
}

input:focus {
  outline: none;
  border: 2px solid #a1887f;
}

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

.register-link {
  margin-top: 10px;
  font-size: 14px;
}

.register-link a {
  color: #6d4c41;
  font-weight: bold;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

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
