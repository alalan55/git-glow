<script setup lang="ts"></script>
<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/user">Usuário</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
nav {
  height: $gg-nav-height;
  display: flex;
  ul {
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: black;
        font-weight: 600;
      }
      .router-link-exact-active {
        color: rgb(124, 119, 119);
        border-bottom: 1px solid;
      }
    }
  }
}
</style>
