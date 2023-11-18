<script setup lang="ts">
import { ref } from "vue";

const currentTheme = ref<Number>(0);
const colorMode = useColorMode();
colorMode.preference = "light";

const lightTheme = ref<Object>({
  path: "/icons/sun-icon.svg",
  alt: "Light",
});

const darkTheme = ref<Object>({
  path: "/icons/moon-icon.svg",
  alt: "Dark",
});

const toggleTheme = () => {
  // currentTheme.value == 0 ? (currentTheme.value = 1) : (currentTheme.value = 0);

  if (currentTheme.value == 0) {
    currentTheme.value = 1;
    colorMode.preference = "dark";
  } else {
    currentTheme.value = 0;
    colorMode.preference = "light";
  }
};
</script>

<template>
  <figure @click="toggleTheme">
    <img
      :src="currentTheme ? darkTheme.path : lightTheme.path"
      :alt="currentTheme ? darkTheme.alt : lightTheme.alt"
    />
  </figure>
</template>

<style lang="scss">
@import "@/assets/main.scss";
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

// criar no mixins minhas escolhas de cores para fazer o correto funcionamento do dark/light mode
.dark-mode body {
  @include darkTheme;
}
</style>
