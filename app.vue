<template>
  <div class="wrapper">
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/user">Usuário</NuxtLink></li>
      </ul>
    </nav>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  // fall back caso não tenha o svh no browser
  height: 100vh;
  height: 100dvh;

  nav {
    height: 70px;
    display: flex;
    ul {
      width: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: black;
          font-weight: 600;
        }
        .router-link-exact-active {
          color: rgb(124, 119, 119);
          border-bottom: 1px solid;
        }
      }
    }
  }
  main {
    height: calc(100% - 70px);
  }
}
</style>
