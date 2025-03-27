<script setup lang="ts"></script>

<template>
  <div id="table-container">
    <table border="1">
      <thead>
        <tr>
          <th>Nombre del empleado</th>
          <th>Correo electrónico</th>
          <th>Cargo</th>
          <th>Horario</th>
          <th>Tipo de usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>empleado 1</td>
          <td>correoempleado1</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
          </td>
        </tr>
        <tr>
          <td>empleado 2</td>
          <td>correoempleado2</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
          </td>
        </tr>
        <tr>
          <td>empleado 3</td>
          <td>correoempleado3</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
          </td>
        </tr>
        <tr>
          <td>empleado 4</td>
          <td>correoempleado4</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
          </td>
        </tr>
        <tr>
          <td>empleado 5</td>
          <td>correoempleado5</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
          </td>
        </tr>
        <tr>
          <td>empleado 6</td>
          <td>correoempleado6</td>
          <td>cargo</td>
          <td>horario</td>
          <td>tipo de usuario</td>
          <td>
            <div><button>actualizar</button><button>eliminar</button></div>
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
