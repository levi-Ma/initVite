<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const msg = ref<string>("Hello Vue 3 + TypeScript + Vite");
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
