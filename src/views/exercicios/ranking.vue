<script setup>
import {ref} from 'vue'

const assuntos = ref([
    { nome: "Eventos", votos: 1},
    { nome: "V-For", votos: 2},
    { nome: "Reatividade", votos: 3},
    { nome: "V-Bind", votos: 0},
]);

const votar = function(assunto){
    assunto.votos++
}

// A função que retorna os 3 primeiro é 
// assuntos.value.sort((a, b) => b.votos - a.votos).slice(0, 3)

</script>

<template>
  <h1 class="text-2xl font-bold mb-14">Ranking de Assuntos</h1>
  <div class="flex flex-row space-x-4">

    <span class="block mx-auto mt-3 bg-gray-200 rounded-md px-4 py-2 mb-4 text-slate-950" @mouseover="verifica">
            #1 V-For
    </span>

    <span class="block mx-auto mt-3 bg-green-400 font-semibold rounded-md px-4 py-2 mb-4 text-slate-950 -translate-y-5" @mouseover="verifica">
            #1 Reatividade
    </span>

    <span class="block mx-auto mt-3 bg-gray-200 rounded-md px-4 py-2 mb-4 text-slate-950" @mouseover="verifica">
            #3 Eventos
    </span>
  </div>

    <h2 class="text-2xl font-bold mt-4">Votação</h2>
    <ul class="mb-12">
        <li v-for="assunto in assuntos" :key="assunto.nome" class="flex flex-row items-center justify-center">
            {{ assunto.nome }} - {{ assunto.votos }} votos <button class="btnVote" @click="votar(assunto)">+</button>
        </li>
    </ul>
    

{{ assuntos }}
</template>

<style scoped>

.btnVote {
    @apply mx-auto bg-green-300 rounded-md p-1 w-4 h-4 text-slate-950 flex items-center justify-center
}

</style>