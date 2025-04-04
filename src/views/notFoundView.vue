<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div>
    <div class="message">
      <p class="error">404</p>
      <p>No encontramos lo que buscabas :c</p>
      <a @click="router.push('/')">regresar al principio </a>
    </div>
    <img src="/coffee.png" alt="taza de café" />
  </div>
</template>

<style scoped lang="css">
div {
  font-size: 1.2em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
}

div .message {
  margin-top: 15%;
}

a {
  font-weight: bold;
  color: var(--primary-500);
}

a:hover {
  color: var(--primary-700);
  cursor: pointer;
}

img {
  position: absolute;
  bottom: 10px;
  height: 25%;
}

.error {
  font-size: 10em;
}
</style>
