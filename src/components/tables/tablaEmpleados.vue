<script setup lang="ts">
import { FirebaseService } from '@/services/firebaseService'
import { obtenerCelda } from '@/utils/handlers/tablas'
import type { Empleado } from '@/utils/types/empleados'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref, type Ref } from 'vue'

const empleados: Ref<Empleado[]> = ref([])

async function eliminarEmpleado(evt: Event) {
  try {
    const celda = obtenerCelda(evt, '#nombre-empleado')
    const nombreEmpleado: string = celda.innerHTML
    FirebaseService.eliminarUsuario('usuarios', nombreEmpleado)
    alert('se ha eliminado este usuario')
    celda.parentElement?.remove()
  } catch (error) {
    alert(error)
    console.log(error)
  }
}

async function modificar(evt: Event) {
  try {
    const nombreEmpleado: string = obtenerCelda(evt, '#nombre-empleado').innerHTML
    alert('se está modificando ' + nombreEmpleado)
  } catch (error) {
    alert('Error al modificar el empleado')
    console.error(error)
  }
}

onMounted(async () => {
  const col = collection(FirebaseService.db, 'usuarios')

  empleados.value = (await getDocs(col)).docs.map((usuario) => ({
    nombre: usuario.data().nombre,
    correo: usuario.data().correo,
    cargo: usuario.data().cargo,
    horario: {
      entrada: usuario.data().horario.entrada,
      salida: usuario.data().horario.salida,
    },
    tipo: usuario.data().tipo,
  }))
})
</script>

<template>
  <div class="app-table">
    <table border="1" v-if="empleados.length > 0">
      <thead>
        <tr>
          <th>Nombre del empleado</th>
          <th>Correo electrónico</th>
          <th>Cargo</th>
          <th>Hora de entrada</th>
          <th>Hora de salida</th>
          <th>Tipo de usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(empleado, index) in empleados" :key="index">
          <td id="nombre-empleado">{{ empleado.nombre }}</td>
          <td>{{ empleado.correo }}</td>
          <td>{{ empleado.cargo }}</td>
          <td>{{ empleado.horario.entrada.toDate().toLocaleTimeString() }}</td>
          <td>{{ empleado.horario.salida.toDate().toLocaleTimeString() }}</td>
          <td>{{ empleado.tipo }}</td>
          <td>
            <div>
              <button @click="modificar" class="app-button">actualizar</button>
              <button @click="eliminarEmpleado" class="app-button">eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Cargando datos...</p>
  </div>
</template>
