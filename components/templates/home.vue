<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="home__texts">
      <h1><AtomsLogo /></h1>

      <span>
        Insira abaixo o seu nome de usuáio do <strong>github</strong> para que possamos
        fazer a busca.
      </span>
    </div>

    <div class="home__form">
      <AtomsInput />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";
.home {
  padding: $gg-s1 $gg-s2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $gg-s2;

  &__texts {
    text-align: center;
    max-width: 900px;
    margin-bottom: $gg-s1;

    h1 {
      margin-bottom: 0.58rem;
    }

    span {
      strong {
        color: $gg-blue-ocean-2;
      }
    }
  }
  &__form {
    width: 100%;
    max-width: 600px;
  }
}
</style>
