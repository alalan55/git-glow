<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <input
      :type="props.type"
      :value="props.modelValue"
      @input="emits('update:modelValue', $event.target.value)"
    />

    <figure v-show="props.isLoading">
      <img src="/icons/loading-icon.svg" alt="loading" />
    </figure>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/main.scss";

div {
  width: 100%;
  position: relative;
  input {
    padding: 0.5rem $gg-s1;
    border-radius: 7px;
    width: 100%;
    height: 40px;
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    border: 3px solid transparent;
    transition: 0.1s ease-in;

    &:focus {
      outline: none;
      border: 3px solid $gg-blue-ocean-1;
    }
  }

  figure {
    position: absolute;
    right: 0;
    transform: translate(-50%, -50%);
    top: 50%;
  }
}
</style>
