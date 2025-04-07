<script setup lang="ts">
import NavbarComponent from '@/components/navbarComponent.vue'
import TheFooter from '../TheFooter.vue'
</script>

<template>
  <div class="container">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style scoped lang="css">
.container {
  position: relative;
  display: grid;
  grid-template-rows: auto 100% auto;
}

main {
  width: 100dvw;
  height: max-content;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
