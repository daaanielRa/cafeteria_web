<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="app-card">
        <h2 class="titulo-modulo">Formulario de Pedido</h2>

        <form class="app-form" action="" method="post">
          <label for="producto">Selecciona el Producto:</label>
          <select id="producto" name="producto">
            <option value="" selected disabled></option>
            <option value="producto1">Producto 1</option>
            <option value="producto2">Producto 2</option>
          </select>
          <label for="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" name="cantidad" max="50" required />

          <label for="total">Total:</label>
          <input type="text" id="total" name="total" readonly />

          <label for="metodo_pago">Método de Pago:</label>
          <select id="metodo_pago" name="metodo_pago">
            <option value="" selected disabled></option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de crédito</option>
            <option value="tarjeta_debito">Tarjeta de débito</option>
            <option value="transferencia">Transferencia</option>
          </select>
          <div class="form-buttons">
            <button class="app-button" type="submit">Realizar Pedido</button>
          </div>
        </form>
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.app-card {
  width: 600px;
}

.app-button {
  width: max-content;
}
</style>
