<template>
  <section class="loading">
    <AtomsLoading color="rgb(61, 192, 253)" />
    <span>
      Buscando informações de <strong>{{ name }}</strong> 😃
    </span>
  </section>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "", required: true },
});
</script>

<style scoped lang="scss">
@import "@/assets/main.scss";

.loading {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: $gg-s1;
}
</style>
