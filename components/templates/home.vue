<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="home__texts">
      <h2>Some cool title here</h2>

      <span
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit consectetur asperiores
        quo ad sequi.</span
      >
    </div>

    <div class="home__form">
      <AtomsInput />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";
.home {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__texts {
    text-align: center;
    max-width: 900px;
    margin-bottom: $gg-s1;
  }
  &__form {
    width: 100%;
    max-width: 600px;
  }
}
</style>
