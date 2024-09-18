<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import MenuButton from "./components/MenuButton.vue";
import { ref } from "vue";

const toggleMenu = function () {
  alert("Mais tarde...");
};

const mostrarMenu = ref(false);
</script>

<template>
  <MenuButton @click="toggleMenu" />

  <header>
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  @apply absolute top-0 right-0 h-full overflow-y-scroll bg-slate-900 w-72;
}

main {
  @apply flex flex-col items-center justify-center w-full h-full bg-slate-800 pr-72;
}
</style>
