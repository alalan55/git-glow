<script setup lang="ts"></script>
<template>
  <nav>
    <div class="left">
      <div class="logo"><span>GIT-GLOW.</span></div>
    </div>
    <div class="right">fdsa</div>
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
    // flex: 1 1 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .left {
    .logo {
      span {
        font-weight: 900;
      }
    }
  }
}
</style>
