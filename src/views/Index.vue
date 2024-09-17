<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showChefe = ref(false)

const jaera = ()=>{
    showChefe.value = true
    setTimeout(()=>{
        showChefe.value = false
    }, 3000)
}



</script>

<template>

<!-- Crie pra mim uma página bacana com textos... o primeiro deve ser Bem vindos ao dia 1 do Bootcamp Vue@DCEM -->
<img src="/logotransparente.png" class="h-24 mb-4"/>
        <h1 class="text-4xl font-bold">Bem vindos ao Dia 1 do Bootcamp Vue@DCEM</h1>
        <p class="text-lg mt-4">A intenção desse projeto é fazer uma introdução ao Vue 3 e ao Vite.</p>
        <!-- premissas -->
        <h2 class="text-2xl font-bold mt-8">Premissas</h2>
        <ul class="list-disc list-inside mt-4">
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
    <RouterLink to="conceitos/componente" class="mt-4 bg-blue-400 font-semibold px-8 py-4 rounded-md shadow-lg">
      Vamos!
    </RouterLink>
  <button class="mt-4 bg-red-400 font-semibold px-8 py-4 rounded-md shadow-lg" @click="jaera">
      Quero ir embora..
  </button>
  </div>
  <Transition>
<div class=" absolute bottom-0 z-50  bg-black/50 inset-0 flex flex-col items-center justify-end " v-show="showChefe">
    <div class="relative">
    <img src="/chefe.webp" class="h-72 mb-4 rounded-full border-4"/>
    <span class="absolute top-0 -right-48 bg-white p-4 rounded-full border-4 border-gray-800 text-gray-900">
        ENTRA EM FORMA, MILITAR!
    </span>
</div>
</div>
</Transition>
</template>

<style>
.v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
}
.v-enter, .v-leave-to {
    opacity: 0;
}

</style>
