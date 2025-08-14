<script setup lang="ts">
import { ref } from "vue";

defineProps<{ text: string }>();

const input = ref<HTMLInputElement | null>(null);

defineExpose({
  input,
});
</script>

<template>
  <div class="input-container">
    <input
      ref="input"
      type="text"
      name="text"
      class="input"
      :placeholder="text"
    />
  </div>
</template>

<style scoped>
.input-container {
  width: 50%;
  margin: 0 2rem;
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: 0.2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  letter-spacing: 2px;
}

.input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.input-container:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}
</style>
