<script setup lang="ts">
import productos from '@/utils/actions/productos'
import type { Producto } from '@/utils/types/productos'
import { onMounted, ref, type Ref } from 'vue'

onMounted(() => {
  if (dialog.value) dialog.value.showModal()
})

const props = defineProps<{ productoAModificar: Producto }>()
const dialog = ref<HTMLDialogElement | null>(null)
const emit = defineEmits(['cerrarModal'])

const formularioEditar: Ref<Producto> = ref({
  nombre: props.productoAModificar.nombre,
  cantidad: props.productoAModificar.cantidad,
  precio: props.productoAModificar.precio,
})

function cerrar() {
  emit('cerrarModal', true)

  formularioEditar.value.nombre = ''
  formularioEditar.value.cantidad = 0
  formularioEditar.value.precio = ''
}

async function modificarProducto() {
  try {
    productos.modificar(
      {
        nombre: formularioEditar.value.nombre,
        cantidad: formularioEditar.value.cantidad,
        precio: formularioEditar.value.precio,
      },
      props.productoAModificar.nombre,
    )

    alert(`Se ha modificado ${props.productoAModificar.nombre}`)
    cerrar()
  } catch (error) {
    alert(`No se pudo modificar ${props.productoAModificar.nombre}`)
    console.error(error)
  }
}
</script>

<template>
  <dialog class="app-card" ref="dialog">
    <p class="titulo-modulo">Editar: {{ props.productoAModificar.nombre }}</p>

    <form class="app-form" @submit.prevent="modificarProducto">
      <div>
        <label for="producto">Producto:</label>
        <input
          type="text"
          v-model="formularioEditar.nombre"
          id="producto"
          name="Nombre del producto"
          placeholder="Nombre del producto"
          required
        />
      </div>
      <div>
        <label for="cantidad">Cantidad:</label>
        <input type="number" v-model="formularioEditar.cantidad" id="cantidad" min="1" required />
      </div>
      <div>
        <label for="precio">Precio:</label>
        <div class="precio-input">
          <p class="signo-peso">$</p>
          <input
            type="text"
            v-model="formularioEditar.precio"
            id="precio"
            name="precio"
            min="50"
            placeholder="50"
            required
          />
        </div>
      </div>

      <div class="form-buttons">
        <button @click="cerrar" class="app-button">
          <span class="material-symbols-outlined"> cancel </span>
          Cancelar
        </button>
        <button type="submit" class="app-button">
          <span class="material-symbols-outlined"> save_as </span>
          Modificar
        </button>
      </div>
    </form>
  </dialog>
</template>

<style scoped lang="css">
dialog {
  width: 600px;
  border: none;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.form-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 5px;
}
</style>
