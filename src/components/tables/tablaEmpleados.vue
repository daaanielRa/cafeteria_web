<script setup lang="ts">
import { eliminarDocumento } from '@/utils/eliminarDocumentoFireStore'
import { obtenerNombre } from '@/utils/obtenerFilaDeTabla'
import { onMounted, ref, type Ref } from 'vue'
import { faker } from '@faker-js/faker'

interface Empleado {
  nombre: string
  correo: string
  cargo: string
  horario: string
  tipo: string
}

const empleados: Ref<Empleado[]> = ref([])

onMounted(async () => {
  empleados.value = Array.from({ length: 20 }, () => ({
    nombre: faker.person.fullName(),
    correo: faker.internet.email(),
    cargo: faker.person.jobArea(),
    horario: `${faker.date.anytime().getHours()}:${faker.date.anytime().getMinutes()} ${faker.date.anytime().getHours() > 12 ? 'PM' : 'AM'}`,
    tipo: Math.random() > 0.5 ? 'Administrador' : 'Empleado',
  }))
})

async function eliminar(evt: Event) {
  try {
    if (evt.target) {
      const nombreEmpleado: string = obtenerNombre(evt.target, '#nombre-empleado')
      await eliminarDocumento(nombreEmpleado, 'empleados')
    }
  } catch (error) {
    alert('Error al eliminar el empleado')
    console.error(error)
  }
}

async function modificar(evt: Event) {
  try {
    if (evt.target) {
      const nombreEmpleado: string = obtenerNombre(evt.target, '#nombre-empleado')

      alert('falta implementar')
      console.log(nombreEmpleado)
    }
  } catch (error) {
    alert('Error al modificar el empleado')
    console.error(error)
  }
}
</script>

<template>
  <div class="app-table">
    <table border="1">
      <thead>
        <tr>
          <th>Nombre del empleado</th>
          <th>Correo electrónico</th>
          <th>Cargo</th>
          <th>Horario</th>
          <th>Tipo de usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.nombre">
          <td id="nombre-empleado">{{ empleado.nombre }}</td>
          <td>{{ empleado.correo }}</td>
          <td>{{ empleado.cargo }}</td>
          <td>{{ empleado.horario }}</td>
          <td>{{ empleado.tipo }}</td>
          <td>
            <div>
              <button @click="modificar" class="app-button">actualizar</button>
              <button @click="eliminar" class="app-button">eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
