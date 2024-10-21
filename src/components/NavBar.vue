<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

// <template v-for="i in 4" :key="i">
//       <RouterLink class="hover:underline" :to="`/exercicios/${i}`">
//         Exercício {{ i }} - Início
//       </RouterLink>
//     </template>

const dias = [
  {
    numero: 1,
    paginas: [
      { name: "Componente", path: "/conceitos/componente" },
      { name: "Template Syntax {{ }}", path: "/conceitos/mustache" },
      { name: "V-For", path: "/conceitos/vfor" },
      { name: "Reatividade Básica", path: "/conceitos/reatividade" },
      { name: "V-Bind", path: "/conceitos/bind" },
      { name: "V-Model", path: "/conceitos/vmodel" },
      { name: "If/Else", path: "/conceitos/ifelse" },
      { name: "Show", path: "/conceitos/show" },
    ],
    exercicios: [
      { name: "Nome", path: "/exercicios/nome" },
      { name: "Listagem", path: "/exercicios/listagem" },
      { name: "Numero aleatório", path: "/exercicios/numero" },
      { name: "Card", path: "/exercicios/card" },
      { name: "Esconder Menu", path: "/exercicios/menu" },
    ],
  },
  {
    numero: 2,
    paginas: [
      { name: "Binding (+devtools)", path: "/conceitos/binding" },
      { name: "Eventos", path: "/conceitos/eventos" },
      { name: "Computed Properties", path: "/conceitos/computed" },
    ],
    exercicios: [
      { name: "Ramal Sigiloso", path: "/exercicios/ramalsigiloso" },
      { name: "Form Validation", path: "/exercicios/formvalidation" },
      { name: "Ranking", path: "/exercicios/ranking" },
    ],
  },
  {
    numero: 3,
    paginas: [],
    exercicios: [],
  },
  {
    numero: 4,
    paginas: [],
    exercicios: [],
  },
];

const currentDay = ref(2);
</script>

<template>
  <nav class="flex flex-col px-8 py-4 space-y-2">
    <RouterLink to="/">Home</RouterLink>
    <h2 class="text-2xl font-bold text-cyan-400 drop-shadow-lg">Conceitos</h2>
    <template v-for="dia in dias" :key="dia.numero">
      <h3
        class="pl-2 font-semibold cursor-pointer text-cyan-200 hover:underline"
        :class="{
          'opacity-20': !dia.paginas.length && currentDay !== dia.numero,
          'opacity-70': dia.paginas.length && currentDay !== dia.numero,
          underline: currentDay == dia.numero,
        }"
        @click="currentDay = dia.numero"
      >
        Dia {{ dia.numero }}
      </h3>
      <template v-if="currentDay == dia.numero">
        <RouterLink
          v-for="pagina in dia.paginas"
          class="pl-4 hover:underline"
          active-class="text-yellow-200 underline"
          :to="pagina.path"
        >
          {{ pagina.name }}
        </RouterLink>
      </template>
    </template>
    <h2 class="text-2xl font-semibold text-cyan-400 drop-shadow-lg">
      Exercícios
    </h2>
    <template v-for="dia in dias" :key="dia.numero">
      <h3
        class="pl-2 font-semibold cursor-pointer text-cyan-200 hover:underline"
        :class="{
          'opacity-20': !dia.exercicios.length && currentDay !== dia.numero,
          'opacity-70': dia.exercicios.length && currentDay !== dia.numero,
          underline: currentDay == dia.numero,
        }"
        @click="currentDay = dia.numero"
      >
        Dia {{ dia.numero }}
      </h3>
      <template v-if="currentDay == dia.numero">
        <RouterLink
          v-for="pagina in dia.exercicios"
          class="pl-4 hover:underline"
          active-class="text-yellow-200 underline"
          :to="pagina.path"
        >
          {{ pagina.name }}
        </RouterLink>
      </template>
    </template>
  </nav>
</template>
