<template>
  <div class="wrapper">
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref<String>("Tela de Home");
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  span {
    font-size: 1.5rem;
  }
}
</style>
