<script setup lang="ts">
import { FirebaseService } from '@/services/firebase/firebaseService'
import empleados from '@/utils/actions/empleados'
import type { Empleado } from '@/utils/types/empleados'
import { collection, getDocs } from 'firebase/firestore'
import { onMounted, ref, type Ref } from 'vue'

onMounted(async () => {
  const col = collection(FirebaseService.db, 'usuarios')

  empleadosRegistrados.value = (await getDocs(col)).docs.map((usuario) => ({
    nombre: usuario.data().nombre,
    correo: usuario.data().correo,
    cargo: usuario.data().cargo,
    horario: {
      entrada: usuario.data().horario.entrada,
      salida: usuario.data().horario.salida,
    },
    tipo: usuario.data().tipo,
  }))

  empleadosRegistrados.value.sort((a, b) => a.nombre.localeCompare(b.nombre))
})

const empleadosRegistrados: Ref<Empleado[]> = ref([])
</script>

<template>
  <div class="app-table">
    <table border="1" v-if="empleadosRegistrados.length > 0">
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
        <tr v-for="(empleado, index) in empleadosRegistrados" :key="index">
          <td id="nombre-empleado">{{ empleado.nombre }}</td>
          <td>{{ empleado.correo }}</td>
          <td>{{ empleado.cargo }}</td>
          <td>{{ empleado.horario.entrada.toDate().toLocaleTimeString() }}</td>
          <td>{{ empleado.horario.salida.toDate().toLocaleTimeString() }}</td>
          <td>{{ empleado.tipo }}</td>
          <td>
            <div>
              <button @click="empleados.modificar" class="app-button">
                <span class="material-symbols-outlined"> edit_square </span>
                actualizar
              </button>
              <button @click="empleados.eliminar" class="app-button">
                <span class="material-symbols-outlined"> delete </span>
                eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <img
      v-else
      src="https://media.tenor.com/qMWisxsVAcoAAAAM/cat-funny-stupid-loading-reloading-frozen.gif"
      alt="😺"
    />
  </div>
</template>
