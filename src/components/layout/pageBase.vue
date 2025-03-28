<script setup lang="ts">
import NavbarComponent from '@/components/navbarComponent.vue'
</script>

<template>
  <div class="container">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped lang="css">
.container {
  display: grid;
  grid-template-rows: auto 1fr;
}

main {
  width: 100dvw;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
