<script setup lang="ts">
const props = defineProps<{ error: boolean; message: string; isShown: boolean }>()

const icon = props.error ? 'error' : 'check_circle'
</script>

<template>
  <div
    class="toast"
    :class="{
      'toast-error': props.error,
      'toast-success': !props.error,
      'toast-shown': props.isShown,
    }"
  >
    <div>
      <span class="material-icons"> {{ icon }} </span>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<style scoped lang="css">
.toast {
  background-color: var(--primary-50);
  border-radius: 10px;
  position: absolute;
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 250px;
  height: 100px;
  right: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
}

.toast div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.toast-error {
  box-shadow: 0 0 10px var(--text-600);
}

.toast-success {
  box-shadow: 0 0 10px var(--success);
}

.toast-shown {
  opacity: 100%;
  pointer-events: none;
}
</style>
