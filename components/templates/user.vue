<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import { getPageFromLinkHeader } from "@/utils/utils";

const colorMode = useColorMode();
const store = useUserStore();
const route = useRoute();
const config = useRuntimeConfig();
const user = ref<any>(store.$user);
const user_repos = ref<any>(store.$user_repos);
const loading_user = ref<boolean>(false);
const links = ref<any>([]);

const getUserByParams = async () => {
  try {
    loading_user.value = true;
    const user_response = await $fetch(`/${route.params.name}`, {
      baseURL: config.public.base_url,
      headers: {
        Authorization: `Bearer ${config.public.github_token}`,
      },
    });

    let user_repositories: any = [];

    user_response.repos_url
      ? (user_repositories = await fetchUserRepo(user_response.repos_url))
      : "";

    user.value = user_response;
    user_repos.value = user_repositories.repos;
    
    loading_user.value = false;
  } catch (error) {
    loading_user.value = false;
    console.error(error);
  }
};

const fetchUserRepo = async (url: string) => {
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
};


if (!user.value && route.params.name) await getUserByParams();
</script>

<template>
  <main class="user">
    <OrganismsUserProfile
      v-if="user && !loading_user"
      :user-prop="user"
      :user-repos-prop="user_repos"
    />

    <OrganismsUserNotFound v-if="!user && !loading_user" />

    <OrganismsUserLoadingInfo
      v-if="!user && loading_user"
      :name="`${route.params.name}`"
    />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

.user {
  width: 100%;
  height: 100%;
  padding: $gg-s1 $gg-s2;
  max-width: 1300px;
  margin: 0 auto;
}
</style>
