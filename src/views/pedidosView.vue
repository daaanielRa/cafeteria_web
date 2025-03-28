<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="pedidocontainer">
        <h2>Formulario de Pedido</h2>

        <form action="" method="post">
          <label for="producto">Selecciona el Producto:</label>
          <select id="producto" name="producto">
            <option value="" selected disabled></option>
            <option value="producto1">Producto 1</option>
            <option value="producto2">Producto 2</option>
          </select>
          <br /><br />

          <label for="cantidad">Cantidad:</label>
          <div>
            <input type="number" id="cantidad" name="cantidad" max="50" required />
            <br /><br />
          </div>

          <label for="mesa">Selecciona la Mesa:</label>
          <select id="mesa" name="mesa">
            <option value="" selected disabled></option>
            <option value="mesa1">mesa 1</option>
            <option value="mesa2">mesa 2</option>
          </select>
          <br /><br />

          <label for="total">Total:</label>
          <input type="text" id="total" name="total" readonly />
          <br /><br />

          <label for="metodo_pago">Método de Pago:</label>
          <select id="metodo_pago" name="metodo_pago">
            <option value="" selected disabled></option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de crédito</option>
            <option value="tarjeta_debito">Tarjeta de débito</option>
            <option value="transferencia">Transferencia</option>
          </select>
          <br /><br />

          <button type="submit" class="font-poppins">Realizar Pedido</button>
        </form>
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.pedidocontainer {
  justify-content: center;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 10px var(--primary-200);
  text-align: center;
  width: 100%;
  max-width: 380px;
  border: 2px solid #5d4037;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px var(--primary-200);
}

.pedidocontainer {
  margin-top: 80px;
}

nav a {
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #6f4f37;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  position: relative;
  line-height: 40px;
}

nav a::after {
  content: ''; /* Necesario para generar la línea */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #6f4f37;
}

nav a:hover::after {
  width: 100%; /* Expande la línea al 100% en el hover */
}

input {
  max-width: max-content;
}
</style>
