<script setup lang="ts">
import { ref, computed } from "vue";

interface Theme {
  path: string;
  alt: string;
}

const colorMode = useColorMode();
colorMode.preference = "light";

const lightTheme = ref<Theme>({
  path: "/icons/sun-icon.svg",
  alt: "Light",
});

const darkTheme = ref<Theme>({
  path: "/icons/moon-icon.svg",
  alt: "Dark",
});

const currentTheme = computed(() => {
  let theme = colorMode.preference;
  return theme;
});

const toggleTheme = () =>
  currentTheme.value == "light"
    ? (colorMode.preference = "dark")
    : (colorMode.preference = "light");
</script>

<template>
  <figure @click="toggleTheme">
    <img
      :src="currentTheme == 'dark' ? darkTheme.path : lightTheme.path"
      :alt="currentTheme == 'dark' ? darkTheme.alt : lightTheme.alt"
    />
  </figure>
</template>

<style lang="scss">
@import "@/assets/main.scss";

body {
  transition: 0.2s ease-in-out;

  figure {
    width: 30px;
    height: 30px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.dark-mode body {
  @include darkTheme;
}

.light-mode body {
  @include lightTheme;
}
</style>
