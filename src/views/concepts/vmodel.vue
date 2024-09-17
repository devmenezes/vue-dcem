<script setup>
import { ref } from 'vue';


const nome = ref("Maria")
const idade = ref(20)
const voluntario = ref(false)

</script>

<template>
    <div class="flex space-x-4">
    <form class="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md text-gray-900 h-96">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nome</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Digite seu nome">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="age">Idade</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age" type="number" placeholder="Digite sua idade">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="age">Voluntário?</label>
            <input id="volunteer" type="checkbox">
        </div>
    </form>
    <div class="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md h-96 w-72 text-slate-800">
      <h2 class="text-lg font-bold mb-2">Informações do Perfil</h2>
      <p><strong>Nome:</strong> {{ nome }}</p>
      <p><strong>Idade:</strong> {{ idade }}</p>
      <p><strong>Voluntário: {{ voluntario ? 'sim' : 'não' }}</strong></p>
    </div>
</div>

</template>
