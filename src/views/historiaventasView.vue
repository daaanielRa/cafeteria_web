<script setup lang="ts">
import PageBase from '@/components/layout/pageBase.vue'
</script>

<template>
  <PageBase>
    <template #main>
      <div class="tabla">
        <h2>Historial de ventas</h2>

        <table border="1">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Producto</th>
              <th>Mesa</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Método de Pago</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>05/03/2025</td>
              <td>Dona</td>
              <td>5</td>
              <td>2</td>
              <td>$1000</td>
              <td>Tarjeta</td>
            </tr>
            <tr>
              <td>05/03/2025</td>
              <td>Pan</td>
              <td>3</td>
              <td>1</td>
              <td>$500</td>
              <td>Efectivo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </PageBase>
</template>

<style scoped lang="css">
.tabla {
  top: 0;
  left: 50%;
  width: 50%;
  text-align: center;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #6d4c41;
  color: white;
}

td {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .tabla {
    width: 100%;
  }

  th,
  td {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .tabla {
    width: 100%;
    font-size: 12px;
  }

  th,
  td {
    padding: 6px;
  }
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
</style>
