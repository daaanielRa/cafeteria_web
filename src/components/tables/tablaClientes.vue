<script setup lang="ts"></script>

<template>
  <div id="table-container">
    <table border="1">
      <thead>
        <tr>
          <th>Nombre del cliente</th>
          <th>correo electrónico</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cliente 1</td>
          <td>email@email.com</td>
          <td>
            <div>
              <button>actualizar</button>
              <button>eliminar</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>cliente 2</td>
          <td>email@email.com</td>
          <td>
            <div>
              <button>actualizar</button>
              <button>eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="css">
#table-container {
  margin-top: 50px;
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

td div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

td div button {
  width: 100px;
  height: 30px;
  background-color: #6d4c41;
  border: none;
  border-radius: 10px;
  color: white;
}

td div button:hover {
  width: 100px;
  height: 30px;
  cursor: pointer;
  background-color: #5d3e34;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>
