<script setup>
const props = defineProps({
  color: { type: String, default: "#fff" },
});
</script>

<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 38px;
  height: 38px;
  border: 5px solid v-bind("props.color");
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
