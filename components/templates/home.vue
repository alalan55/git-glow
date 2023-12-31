<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const store = useUserStore();
const router = useRouter();
const config = useRuntimeConfig();
const search = ref<string>("");
const loadingUser = ref<boolean>(false);

watchDebounced(
  search,
  () => {
    if (search.value.length && search.value.length > 2) fetchSearchedUser();
  },
  { debounce: 1500, maxWait: 5000 }
);

async function fetchSearchedUser() {
  try {
    loadingUser.value = true;

    const user = await $fetch(`/${search.value}`, {
      baseURL: config.public.base_url,
      headers: {
        Authorization: `Bearer ${config.public.github_token}`,
      },
    });

    let user_repositories: Object = {};

    user.repos_url ? (user_repositories = await fetchUserRepo(user.repos_url)) : "";

    store.setCurrentReposToUser(user_repositories);
    store.setCurrentUser(user);

    loadingUser.value = false;
    if (user) router.push(`/user/${search.value}`);
    
  } catch (error) {
    console.error(error);
    loadingUser.value = false;
  }
}

async function fetchUserRepo(url: string) {
  let info: any = {};

  try {
    const res = await $fetch.raw(`${url}?per_page=10`, {
      baseURL: config.public.base_url,
      headers: {
        Authorization: `Bearer ${config.public.github_token}`,
      },
    });

    const links = res.headers.get("Link");

    info.repos = res._data;
    info.next = getPageFromLinkHeader(links, 'rel="next"');
    info.prev = getPageFromLinkHeader(links, 'rel="prev"');
    info.last = getPageFromLinkHeader(links, 'rel="last"');
  } catch (error) {
    console.error(error);
  }

  return info;
}

function getPageFromLinkHeader(linkHeader: any, rel: any) {
  if (!linkHeader) return null;

  const links = linkHeader.split(", ");
  const targetLink = links.find((link: any) => link.includes(rel));

  if (targetLink) {
    const url = targetLink.match(/<(.+?)>/);
    return url ? url[1] : null;
  }

  return null;
}
</script>

<template>
  <div class="home">
    <div class="home__texts">
      <h1>
        <AtomsLogo />
      </h1>

      <span>
        Insira abaixo o seu nome de usuáio do <strong>github</strong> para que possamos
        fazer a busca.
      </span>
    </div>

    <div class="home__form">
      <AtomsInput type="text" v-model="search" :is-loading="loadingUser" />
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
