<script setup lang="ts"></script>

<template>
  <div id="footer-container">
    <menu>
      <section id="logo">
        <img src="/logo.png" alt="logo" />
        <p class="titulo-modulo font-pacifico">Cafetería YCoffee</p>
        <p class="titulo-modulo">&copy; 2025</p>
        <p class="titulo-modulo">ADSO 2772942</p>
      </section>
      <section id="links">
        <div>
          <p class="titulo-modulo">Perfiles de GitHub</p>
          <ul>
            <li>
              <a href="https://github.com/daaanielRa/" target="_blank">
                <button class="app-button">
                  <span class="material-symbols-outlined"> design_services </span>
                  <span class="material-symbols-outlined"> database </span>
                  Carlos Daniel Ramírez Álvarez
                  <span class="material-symbols-outlined"> terminal </span>
                  <span class="material-symbols-outlined"> bug_report </span>
                </button>
              </a>
            </li>
            <li>
              <a href="https://github.com/Zharickjp13" target="_blank">
                <button class="app-button">
                  <span class="material-symbols-outlined"> design_services </span>
                  <span class="material-symbols-outlined"> database </span>
                  Zharick Jineth Portillo Criado
                  <span class="material-symbols-outlined"> terminal </span>
                  <span class="material-symbols-outlined"> bug_report </span>
                </button>
              </a>
            </li>
            <li>
              <a href="https://github.com/KattoDev" target="_blank">
                <button class="app-button">
                  <span class="material-symbols-outlined"> design_services </span>
                  <span class="material-symbols-outlined"> database </span>
                  Kristopher Alexis Verjel Rincón
                  <span class="material-symbols-outlined"> terminal </span>
                  <span class="material-symbols-outlined"> bug_report </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://github.com/daaanielRa/cafeteria_web" target="_blank">
                <button class="app-button">
                  <span class="material-symbols-outlined"> graph_1 </span>
                  Ver el proyecto en GitHub
                  <span class="material-symbols-outlined"> graph_1 </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </menu>

    <div id="copy">
      <p>powered by:</p>

      <div>
        <a href="https://vuejs.org" target="_blank">
          <img src="https://es.vuejs.org/images/logo.png" alt="vue3" />
        </a>
        <a href="https://es.vite.dev"><img src="https://es.vite.dev/logo.svg" alt="vite" /></a>
        <a href="https://firebase.google.com"
          ><img
            src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
            alt="firebase"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
menu {
  display: flex;
  justify-content: space-between;
}

img {
  width: 20%;
}

ul li {
  margin: 10px 0 0 0;
}

ul a {
  text-decoration: none;
}

div p {
  text-align: center;
}

section {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.app-button {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.font-pacifico {
  font-weight: normal;
}

.titulo-modulo {
  padding: 0;
  margin: 0;
}

#footer-container {
  width: 100dvw;
  margin: 0;
  background-color: var(--secondary-300);
  padding: 20px;
}

#copy {
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

#copy div {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

#copy div a {
  width: 32px;
  height: 32px;
}

#copy div a img {
  width: inherit;
  height: inherit;
}
</style>
