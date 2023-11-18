<script setup lang="ts">
import { ref } from "vue";
const lightTheme = ref<Object>({
  path: "/icons/sun-icon.svg",
  alt: "Light",
});

const darkTheme = ref<Object>({
  path: "/icons/moon-icon.svg",
  alt: "Dark",
});

const currentTheme = ref<Number>(0);

const toggleTheme = () =>
  currentTheme.value == 0 ? (currentTheme.value = 1) : (currentTheme.value = 0);
</script>

<template>
  <figure @click="toggleTheme">
    <img
      :src="currentTheme ? darkTheme.path : lightTheme.path"
      :alt="currentTheme ? darkTheme.alt : lightTheme.alt"
    />
  </figure>
</template>

<style lang="scss" scoped>
figure {
  width: 35px;
  height: 35px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
