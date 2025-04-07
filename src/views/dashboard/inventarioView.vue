<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaProductos from '@/components/tables/tablaProductos.vue'
import productos from '@/utils/actions/productos'
import type { Producto } from '@/utils/types/productos'
import { ref, type Ref } from 'vue'

const formProducto: Ref<Producto> = ref({
  nombre: '',
  cantidad: 1,
  precio: '',
})
</script>

<template>
  <PageBase>
    <template #main>
      <section class="invcontainer">
        <div class="app-card">
          <p class="titulo-modulo">Gestión de Productos</p>
          <form class="app-form" @submit.prevent="productos.anadir(formProducto)">
            <div>
              <label for="producto">Producto:</label>
              <input
                type="text"
                v-model="formProducto.nombre"
                id="producto"
                name="Nombre del producto"
                placeholder="Nombre del producto"
                required
              />
            </div>
            <div>
              <label for="cantidad">Cantidad:</label>
              <input type="number" v-model="formProducto.cantidad" id="cantidad" min="1" required />
            </div>
            <div>
              <label for="precio">Precio:</label>
              <div class="precio-input">
                <p class="signo-peso">$</p>
                <input
                  type="text"
                  v-model="formProducto.precio"
                  id="precio"
                  name="precio"
                  min="50"
                  placeholder="50"
                  required
                />
              </div>
            </div>
            <div class="form-buttons">
              <button class="app-button" type="submit" name="accion" value="agregar">
                <span class="material-symbols-outlined"> add_diamond </span>
                Agregar producto
              </button>
            </div>
          </form>
          <TablaProductos />
        </div>
      </section>
    </template>
  </PageBase>
  <NavbarComponent />
</template>

<style scoped lang="css">
.app-card {
  width: 600px;
}

.form-buttons button {
  width: 180px;
}
</style>
