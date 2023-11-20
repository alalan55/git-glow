<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const user = store.$user;
</script>

<template>
  <main class="user">
    <section class="user__hero">
      <div class="user__hero__left">
        <span class="title"> Olá, eu me chamo Nome do fulano aqui</span>
        <br />
        <span class="sub-title">Front-end developer</span>
      </div>

      <div class="user__hero__right">
        <figure></figure>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";
.user {
  width: 100%;
  height: 100%;
  padding: $gg-s1 $gg-s2;
  //   border: 1px solid red;
  max-width: 1300px;
  margin: 0 auto;

  &__hero {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      flex: 1 1 500px;
    }

    &__left {
      .title {
        font-size: 1.95rem;
        font-weight: 600;
      }
      .sub-title {
        font-size: 1.3rem;
      }
    }

    &__right {
      display: flex;
      align-items: center;
      justify-content: center;

      figure {
        width: 300px;
        height: 300px;
        background: $gg-blue-ocean-2;
        border-radius: 50%;
      }
    }

    @media (max-width: 1031px) {
      padding: $gg-s2 0 0;
      align-items: flex-start;
      &__left {
        text-align: center;
      }
    }
  }
}
</style>
