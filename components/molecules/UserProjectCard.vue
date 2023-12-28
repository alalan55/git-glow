<script setup lang="ts">
const props = defineProps({
  projectProp: { type: Object, default: null, required: true },
});

const formateDate = (date: string) => {
  const opt: object = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formmated_date = new Date(date).toLocaleDateString(undefined, opt);
  return formmated_date;
};
</script>

<template>
  <div class="project-card">
    <div class="header">
      <div class="principal">
        <span> {{ projectProp.name || "Sem registro de nome 😅" }}</span>
        <div class="icons">
          <NuxtLink :to="projectProp.html_url">
            <figure>
              <img src="/icons/git-hub-icon.svg" alt="Github" class="icon-img" />
            </figure>
          </NuxtLink>

          <NuxtLink v-if="projectProp.homepage" :to="projectProp.homepage">
            <figure>
              <img src="/icons/eye-icon.svg" alt="Live project" class="icon-img" />
            </figure>
          </NuxtLink>
        </div>
      </div>

      <p>{{ projectProp.description || "Sem descrição 🙊" }}</p>
    </div>

    <div class="body">
      <div class="body__topic">
        <small>Criado em: </small>
        <span>{{ formateDate(projectProp.created_at) || "Sem descrição 🙊" }}</span>
      </div>
      <div class="body__topic">
        <small>Principal linguagem utilizada: </small>
        <span> {{ projectProp.language || "Sem descrição 🙊" }}</span>
      </div>
    </div>

    <div class="footer">
      <div class="counters">
        <small>forks: </small>
        <span>{{ projectProp.forks || 0 }}</span>
      </div>
      <div class="counters">
        <small>watcher: </small>
        <span>{{ projectProp.watchers_count || 0 }}</span>
      </div>
      <div class="counters">
        <small>Issues: </small>
        <span>{{ projectProp.watchers_count || 0 }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.project-card {
  padding: $gg-s1;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .header {
    .principal {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icons {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        figure {
          width: 23px;
          height: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.1rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: invert(100%) sepia(90%) saturate(7441%) hue-rotate(187deg)
              brightness(120%) contrast(100%);
          }
        }
      }
      span {
        display: block;
        font-weight: 800;
        margin: 0 0 0.7rem 0;
      }
    }

    p {
      font-size: 0.85rem;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &__topic {
      small {
        font-size: 0.7rem;
        font-weight: 600;
      }
      span {
        font-size: 0.85rem;
      }
    }
  }

  .footer{
    display: flex;
    align-items: center;
    gap: .5rem;
    .counters{
      flex: 1 1 auto;
      small {
        font-size: 0.7rem;
        font-weight: 600;
      }
      span {
        font-size: 0.85rem;
      }
    }
  }

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.18);
    // cursor: pointer;
  }
}
</style>
