import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null,
      repos: null,
    };
  },
  actions: {
    setCurrentUser(payload) {
      this.user = payload;
    },
    setCurrentReposToUser(payload) {
      this.repos = payload;
    },
  },
  getters: {
    $user: (state) => state.user,
    $user_repos: (state) => state.repos
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
