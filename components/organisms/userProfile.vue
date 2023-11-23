<script setup lang="ts">
const props = defineProps({
  userProp: { type: Object, default: null },
});
</script>

<template>
  <section class="hero">
    <div class="hero__left">
      <span class="title">
        Olá, eu me chamo {{ userProp?.name || "ops, não tenho nome 😬" }}😀!</span
      >
      <br />
      <span class="sub-title">{{ userProp?.bio || "ops, não tenho bio 😬" }}</span>
    </div>

    <div class="hero__right">
      <figure>
        <img :src="userProp?.avatar_url" :alt="userProp?.name" />
      </figure>
    </div>

    <div class="hero__bottom">
      <NuxtLink :to="userProp.blog" class="link-buttom">
        <figure>
          <img src="/icons/blog-icon.svg" alt="Blog" />
        </figure>
      </NuxtLink>

      <NuxtLink :to="userProp.html_url" class="link-buttom">
        <figure>
          <img src="/icons/git-hub-icon.svg" alt="GitHub" />
        </figure>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.hero {
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  & > div {
    flex: 1 1 500px;
  }

  &__left {
    .title {
      font-size: 1.91rem;
      font-weight: 700;
      transition: 0.5rem;
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
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      text-decoration: none;
      figure {
        width: 30px;
        height: 30px;
        background: $gg-black-1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        img {
          width: 65%;
          height: 65%;
          object-fit: contain;
        }
      }
    }
  }

  @media (max-width: 1031px) {
    padding: $gg-s2 0 0;
    align-items: flex-start;
    &__left {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    &__left {
      .title {
        font-size: 1.6rem;
      }
      .sub-title {
        font-size: 1rem;
      }
    }
    &__right {
      figure {
        width: 250px;
        height: 250px;
      }
    }
    &__bottom {
      justify-content: center;
    }
  }
}
</style>
