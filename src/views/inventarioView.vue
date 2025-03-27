<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
import TablaProductos from '@/components/tables/tablaProductos.vue'
import { FirebaseService } from '@/services/firebaseService';
import { addDoc, collection } from 'firebase/firestore';
import { ref } from 'vue';

const formProducto = ref({
  nombre: "",
  cantidad: 0,
  precio: "",
})

async function anadirProducto() {

  try {
    const col=collection(FirebaseService.db,"productos") 
  await addDoc(col, formProducto.value)
    alert("producto añadido")
  } catch (error) {
    alert("error al añadir")
    console.error(error);
    
  }
}

</script>

<template>
  <PageBase>
    <template #main>
      <section class="invcontainer">
        <div class="card">
          <h2>Gestión de Productos</h2>
          <form @submit.prevent="anadirProducto">
            <div>
              <label for="producto">Producto:</label>
              <input type="text" v-model="formProducto.nombre" id="producto" name="Nombre del producto" required />
            </div>
            <div>
              <label for="cantidad">Cantidad:</label>
              <input type="number" v-model="formProducto.cantidad" id="cantidad" min="1" required />
            </div>
            <div>
              <label for="precio">Precio:</label>
              <input type="text" v-model="formProducto.precio" id="precio" name="precio" min="50" required />
            </div>
            <div class="containerbuttom">
              <button type="submit" name="accion" value="agregar" class="font-poppins">
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
