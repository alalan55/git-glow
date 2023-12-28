<script setup lang="ts">
const props = defineProps({
  userProp: { type: Object, default: null },
  userReposProp: { type: Object, default: null },
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

  <section class="projects">
    <div class="projects__title">
      <span>Projetos</span>
      <p>
        Explore minha galeria de projetos, onde cada empreendimento é mais do que uma
        realização técnica; é uma narrativa de inovação e dedicação. Da concepção à
        implementação, cada projeto reflete meu compromisso em superar desafios e criar
        soluções significativas e impactantes.
      </p>
    </div>

    <div class="projects__list">
      <template v-for="project in userReposProp.repos" :key="project.id">
        <MoleculesUserProjectCard :project-prop="project" />
      </template>
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
      overflow: hidden;

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

.projects {
  height: 100vh;
  height: 100dvh;
  padding: $gg-s2 0;
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: $gg-s4;
    span {
      font-size: 1.91rem;
      font-weight: 700;
      transition: 0.5rem;
    }
  }

  &__list {
    display: grid;
    gap: $gg-s2;
    padding: 0.55rem 0.55rem $gg-s2;
    overflow-y: auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: $gg-white-1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
}
</style>
