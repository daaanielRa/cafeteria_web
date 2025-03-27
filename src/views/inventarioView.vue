<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaProductos from '@/components/tables/tablaProductos.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <section class="invcontainer">
        <div class="card">
          <h2>Gestión de Productos</h2>
          <form>
            <div>
              <label for="producto">Producto:</label>
              <input type="text" id="producto" name="Nombre del producto" required />
            </div>
            <div>
              <label for="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" min="1" required />
            </div>
            <div>
              <label for="precio">Precio:</label>
              <input id="precio" name="precio" min="50" required />
            </div>
          </form>
          <div class="containerbuttom">
            <button type="submit" name="accion" value="agregar" class="font-poppins">
              Agregar producto
            </button>
          </div>
          <TablaProductos />
        </div>
      </section>
    </template>
  </PageBase>
  <NavbarComponent />
</template>

<style scoped lang="css">
.invcontainer {
  width: 100dvw;
  height: 80dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invcontainer .card {
  background-color: white;
  padding: 25px;
  border-radius: 20px;
  width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.containerbuttom {
  display: flex;
  justify-content: center;
  gap: 20px;
}

form div {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid #d7ccc8;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f3e5d8;
  color: #5d4037;
}

.containerbuttom {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.containerbuttom button {
  width: 150px;
  height: 30px;
  background-color: #6d4c41;
  border: none;
  border-radius: 10px;
  color: white;
}

.containerbuttom button:hover {
  cursor: pointer;
  background-color: #5d3e34;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>
