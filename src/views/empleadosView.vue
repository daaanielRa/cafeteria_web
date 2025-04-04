<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaEmpleados from '@/components/tables/tablaEmpleados.vue'
import { FirebaseService } from '@/services/firebaseService'
import type { AnadirEmpleado } from '@/utils/types/formularios'
import { Timestamp } from 'firebase/firestore'
import { ref, type Ref } from 'vue'

const formEmpleado: Ref<AnadirEmpleado> = ref({
  nombre: '',
  correo: '',
  cargo: '',
  horario: { entrada: '', salida: '' },
  clave: '',
  tipoUsuario: '',
})

async function anadirEmpleado() {
  try {
    const formulario = formEmpleado.value
    const [horasEntrada, minutosEntrada] = formulario.horario.entrada.split(':').map(Number)
    const [horasSalida, minutosSalida] = formulario.horario.salida.split(':').map(Number)
    const fecha: Date = new Date()
    const horarioEntrada: Date = new Date(
      fecha.getFullYear(),
      fecha.getMonth(),
      fecha.getDay(),
      horasEntrada,
      minutosEntrada,
    )
    const horarioSalida: Date = new Date(
      fecha.getFullYear(),
      fecha.getMonth(),
      fecha.getDay(),
      horasSalida,
      minutosSalida,
    )

    await FirebaseService.crearUsuario(
      {
        nombre: formulario.nombre,
        correo: formulario.correo,
        cargo: formulario.cargo,
        horario: {
          entrada: Timestamp.fromDate(horarioEntrada),
          salida: Timestamp.fromDate(horarioSalida),
        },
        tipo: formulario.tipoUsuario.toLowerCase(),
      },
      formEmpleado.value.correo,
      formEmpleado.value.clave,
    )
    alert('empleado añadido')

    formulario.nombre = ''
    formulario.correo = ''
    formulario.cargo = ''
    formulario.horario.entrada = ''
    formulario.horario.salida = ''
    formulario.clave = ''
    formulario.tipoUsuario = ''
  } catch (error) {
    alert('error al añadir' + error)
    console.error(error)
  }
}
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <p class="titulo-modulo">Gestión de Empleados</p>
        <form class="app-form" @submit.prevent="anadirEmpleado">
          <div>
            <label for="Nombre">Nombre:</label>
            <input
              type="text"
              v-model="formEmpleado.nombre"
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
              v-model="formEmpleado.correo"
              id="correo"
              placeholder="Correo Electrónico"
              class="font-poppins"
              required
            />
          </div>

          <div>
            <label for="cargo">Cargo:</label>
            <input
              type="text"
              v-model="formEmpleado.cargo"
              id="cargo"
              placeholder="Cargo"
              class="font-poppins"
              required
            />
          </div>

          <div>
            <label for="horario-entrada">Horario entrada:</label>
            <input
              type="time"
              v-model="formEmpleado.horario.entrada"
              id="horario-entrada"
              required
            />
          </div>
          <div>
            <label for="horario-salida">Horario salida:</label>
            <input type="time" v-model="formEmpleado.horario.salida" id="horario-salida" required />
          </div>

          <div>
            <label for="contrasena">Clave:</label>
            <input
              type="password"
              v-model="formEmpleado.clave"
              id="contrasena"
              placeholder="Clave"
              class="font-poppins"
              required
            />
          </div>

          <label for="usuario">Tipo de usuario:</label>
          <select v-model="formEmpleado.tipoUsuario" id="usuario" name="usuario" required>
            <option value="empleado">Empleado</option>
            <option value="administrador">Administrador</option>
          </select>
          <div class="form-buttons">
            <button type="submit" name="accion" value="agregar" class="app-button">
              Agregar empleado
            </button>
          </div>
        </form>
        <TablaEmpleados />
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.app-card {
  width: 1100px;
}

.app-button {
  width: max-content;
}
</style>
