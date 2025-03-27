<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="content">
        <p>Gestión de Empleados</p>

        <form>
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
            <option value="" selected disabled></option>
            <option value="empleado">Empleado</option>
            <option value="administrador">Administrador</option>
          </select>
        </form>
        <div class="containerbuttom">
          <button type="submit" name="accion" value="agregar" class="font-poppins">Agregar</button>
          <button type="submit" name="accion" value="modificar" class="font-poppins">
            Modificar
          </button>
          <button type="submit" name="accion" value="eliminar" class="font-poppins">
            Eliminar
          </button>
        </div>
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.content {
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content p {
  font-weight: bold;
  font-size: 30px;
  padding: 0;
  margin: 0;
}

.content form div {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
}

form input {
  width: 300px;
  height: 30px;
  padding: 0 0 0 10px;
  border: none;
  border-radius: 5px;
}

.containerbuttom {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column-;
  gap: 10px;
}

.containerbuttom button {
  width: 100px;
  height: 30px;
  background-color: #6d4c41;
  border: none;
  border-radius: 10px;
  color: white;
}

.containerbuttom button:hover {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #5d3e34;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>
