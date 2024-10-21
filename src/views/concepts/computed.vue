<script setup>
import {ref} from 'vue'
const texto = ref("");

const nomes = [
  { nome: "João", idade: 70 },
  { nome: "Maria", idade: 30 },
  { nome: "José", idade: 40 },
  { nome: "Ana", idade: 50 },
  { nome: "Pedro", idade: 60 },
];
</script>

<template>
  <h1 class="text-2xl font-bold">Inscrição em curso</h1>
    <textarea
      v-model="texto"
      class="block mx-auto mt-3 max-w-4xl w-full h-48 rounded-md px-4 py-2 mb-4 text-slate-500"
      placeholder="Fale um pouco sobre você"
    >
    </textarea>
    <h2 class="text-2xl font-bold mt-4">Você digitou: {{ texto.length }} caracteres</h2>
    <hr class="bg-white w-full max-w-4xl my-4" />
   
    <div class="flex flex-row space-x-24">
        <div class="flex flex-col items-center justify-center">
            <p class="block mx-auto mt-3 bg-blue-300 rounded-md px-4 py-2 mb-4 text-slate-950" @mouseover="verifica">
                Original
            </p>
            <ul>
                <li v-for="nome in nomes" :key="nome.nome">
                    {{ nome.nome }} - {{ nome.idade }}
                </li>
            </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
            <p class="block mx-auto mt-3 bg-green-300 rounded-md px-4 py-2 mb-4 text-slate-950" @mouseover="verifica">
                Ordenado Nome 
            </p>
            <ul>
                <li v-for="nome in nomes" :key="nome.nome">
                    {{ nome.nome }} - {{ nome.idade }}
                </li>
            </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
            <p class="block mx-auto mt-3 bg-rose-300 rounded-md px-4 py-2 mb-4 text-slate-950" @mouseover="verifica">
                Ordenado Idade 
            </p>
            <ul>
                <li v-for="nome in nomes" :key="nome.nome">
                    {{ nome.nome }} - {{ nome.idade }}
                </li>
            </ul>
        </div>
    </div>
</template>
