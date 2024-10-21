<script setup>
import LogoDCEM from "@/components/LogoDCEM.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showChefe = ref(false);

const jaera = () => {
  showChefe.value = true;
  setTimeout(() => {
    showChefe.value = false;
  }, 3000);
};
</script>

<template>
  <!-- Crie pra mim uma página bacana com textos... o primeiro deve ser Bem vindos ao dia 1 do Bootcamp Vue@DCEM -->
  <LogoDCEM class="h-24 mb-4" />
  <h1 class="text-4xl font-bold">
    Bem vindos ao Dia 1 do Bootcamp Vue<b class="text-yellow-200">@</b>DCEM
  </h1>
  <p class="mt-4 text-lg">
    O objetivo desse projeto é fazer uma introdução ao Vue.JS 3.
  </p>
  <!-- premissas -->
  <h2 class="mt-8 text-2xl font-bold">Premissas</h2>
  <ul class="mt-4 list-disc list-inside">
    <li>Ter conhecimento básico de HTML, CSS e JavaScript</li>
    <li>Ter o Node.js instalado</li>
    <li>Ter o Vue CLI instalado</li>
    <li>Após fazer a criação de um projeto do zero, "clonar" este projeto</li>
  </ul>
  <!-- Faça o botão abaixo com tailwind -->
  <!-- <button>
            Vamos!
        </button> -->

  <div class="flex space-x-4">
    <RouterLink
      to="conceitos/binding"
      class="z-50 px-8 py-4 mt-4 font-semibold bg-blue-400 rounded-md shadow-lg"
    >
      Vamos!
    </RouterLink>
    <button
      class="px-8 py-4 mt-4 font-semibold bg-red-400 rounded-md shadow-lg"
      @click="jaera"
    >
      Quero ir embora..
    </button>
  </div>
  <Transition>
    <div
      class="absolute inset-0 bottom-0 z-40 flex flex-col items-center justify-end bg-black/50"
      v-show="showChefe"
    >
      <div class="relative -translate-x-12">
        <img
          src="/chefe.webp"
          class="mb-4 border-4 border-gray-800 rounded-full h-72 w-72 aspect-square"
        />
        <span class="absolute top-0 baloon -right-48">
          ENTRA EM FORMA, MILITAR!
        </span>
      </div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
