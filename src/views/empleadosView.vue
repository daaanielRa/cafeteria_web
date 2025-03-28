<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaEmpleados from '@/components/tables/tablaEmpleados.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <p class="titulo-modulo">Gestión de Empleados</p>
        <form class="app-form">
          <div>
            <label for="Nombre">Nombre:</label>
            <input type="text" id="Nombre" placeholder="Nombre" class="font-poppins" required />
          </div>

          <div>
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              placeholder="Correo Electrónico"
              class="font-poppins"
              required
            />
          </div>

          <div>
            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" placeholder="Cargo" class="font-poppins" required />
          </div>

          <div>
            <label for="horario">Horario:</label>
            <input type="time" id="horario" required />
          </div>

          <div>
            <label for="clave">Clave:</label>
            <input type="password" id="clave" placeholder="Clave" class="font-poppins" required />
          </div>

          <label for="usuario">Tipo de usuario:</label>
          <select id="usuario" name="usuario" required>
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
