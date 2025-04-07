<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaEmpleados from '@/components/tables/tablaEmpleados.vue'
import empleados from '@/utils/actions/empleados'
import type { AnadirEmpleado } from '@/utils/types/formularios'
import { ref, type Ref } from 'vue'

const formEmpleado: Ref<AnadirEmpleado> = ref({
  nombre: '',
  correo: '',
  cargo: '',
  horario: { entrada: '', salida: '' },
  clave: '',
  tipoUsuario: '',
})
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <p class="titulo-modulo">Gestión de Empleados</p>
        <form class="app-form" @submit.prevent="empleados.anadir(formEmpleado)">
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
              <span class="material-symbols-outlined"> person_add </span>
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
