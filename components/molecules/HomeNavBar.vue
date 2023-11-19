<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <nav>
    <div class="left">
      <div class="left__logo">
        <AtomsLogo />
      </div>
    </div>
    <div class="right">
      <div class="right__theme">
        <AtomsThemeChanger />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
nav {
  height: $gg-nav-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $gg-s2;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
