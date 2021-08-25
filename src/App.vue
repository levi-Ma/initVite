<template>
  <div class="flex flex-col items-center justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const msg = ref<string>("Hello Vue 3 + TypeScript + Vite");
</script>
