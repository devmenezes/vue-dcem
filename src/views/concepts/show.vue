<script setup>
import { ref } from "vue";
const show = ref(true);
</script>
<template>
  <img src="/logotransparente.png" class="h-48 mb-4" v-if="show" />

  <button
    class="px-12 py-4 font-semibold text-gray-900 bg-yellow-300 rounded-md"
    @click="show = !show"
  >
    Toggle
  </button>
</template>
