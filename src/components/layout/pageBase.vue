<script setup lang='ts'>
import NavbarComponent from "@/components/navbarComponent.vue"
</script>

<template>
    <div>
        <header>
            <NavbarComponent/>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
    </div>
</template>

<style scoped lang='css'>
    div {
        display: grid;
        grid-template-rows: auto 1fr;
    }
</style>