<script setup>
import { RouterLink, RouterView } from 'vue-router';
// src/views/concepts/componente.vue src/views/concepts/ifelse.vue src/views/concepts/mustache.vue src/views/concepts/reatividade.vue src/views/concepts/show.vue src/views/concepts/vfor.vue src/views/concepts/vmodel.vue
const conceitos = [
    { name: 'Componente', path: '/conceitos/componente' },
    { name: 'Template Syntax {{ }}', path: '/conceitos/mustache' },
    { name: 'Reatividade Básica', path: '/conceitos/reatividade' },
    { name: 'V-Model', path: '/conceitos/vmodel' },
    { name: 'V-Bind', path: '/conceitos/bind' },
    { name: 'V-For', path: '/conceitos/vfor' },
    { name: 'If/Else', path: '/conceitos/ifelse' },
    { name: 'Show', path: '/conceitos/show' },   
];


</script>

<template>

  <!-- Botão do MENU -->
  <span class="absolute top-4 right-4 z-50 bg-slate-950 rounded-full p-2 border-2 border-white cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </span>


  <header  class="absolute right-0 top-0 h-full bg-slate-900 w-72">
    
      <nav class="flex flex-col space-y-4 p-12">
        <RouterLink to="/">Home</RouterLink>
        <h2 class="text-cyan-400 text-2xl font-semibold drop-shadow-lg ">Conceitos</h2>
        <template v-for="conceito in conceitos" :key="conceito.path">
          <RouterLink class="hover:underline" :to="conceito.path">{{ conceito.name }}</RouterLink>
        </template>
        <h2 class="text-cyan-400 text-2xl font-semibold drop-shadow-lg">Exercícios</h2>
        <template v-for="i in 4" :key="i">
          <RouterLink class="hover:underline" :to="`/exercicios/${i}`">Exercício {{ i }} - Início</RouterLink>
          <!-- <RouterLink :to="`/exercicio/${i}/pronto`">Exercício {{ i }} - Fim</RouterLink> -->
        </template>
      </nav>
  </header>
  <main  class="bg-slate-800 h-full w-full flex flex-col items-center justify-center pr-72" >
    <RouterView/>
  </main>
</template>
