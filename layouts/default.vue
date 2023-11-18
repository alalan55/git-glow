<template>
  <div class="wrapper">
    <MoleculesHomeNavBar />

    <div class="wrapper__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.wrapper {
  // fall back caso não tenha o svh no browser
  height: 100vh;
  height: 100dvh;

  &__content {
    height: calc(100% - $gg-nav-height);
  }
}
</style>
