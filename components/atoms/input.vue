<script setup lang="ts"></script>

<template>
  <input type="text" />
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";
input {
  padding: 0.5rem $gg-s1;
  border-radius: 7px;
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  border: 3px solid transparent;
  transition: 0.1s ease-in;

  &:focus {
    outline: none;
    border: 3px solid $gg-blue-ocean-1;
  }
}
</style>
