<script setup>
const nome = "";
const framework = "";
const conhecimentoPrevio =  []

const validarAlertar = function(){
  alert('Sem validação = VACILAÇÃO!')
}
</script>

<template>
  <h1 class="text-2xl font-bold">Inscrição em curso</h1>
  <form @submit="validarAlertar">
    <label for="framework" class="block mt-4">Qual framework você está aprendendo?</label>
    <select
      v-model="framework"
      class="block mx-auto mt-3 max-w-4xl w-full h-12 rounded-md px-4 py-2 text-slate-500"
    >
      <option value="Vue">Vue</option>
      <option value="React">React</option>
      <option value="Angular">Angular</option>
    </select>
    <textarea
      v-model="nome"
      class="block mx-auto mt-3 max-w-4xl w-full h-48 rounded-md px-4 py-2 text-slate-500"
      placeholder="Fale um pouco sobre você"
    >
    </textarea>
    <!-- interesses -->
    <label for="interesses" class="block mt-4">Quais são seus conhecimentos prévios?</label>

    <input type="checkbox" value="Frontend" v-model="conhecimentoPrevio" class="mr-2" />
    <label for="Frontend">Frontend</label>

    <input type="checkbox" value="Backend" v-model="conhecimentoPrevio" class="ml-6 mr-2" />
    <label for="Backend">Backend</label>

    <button class="block mx-auto mt-3 bg-green-300 rounded-md px-4 py-2 text-slate-950" @mouseover="verifica">
      Enviar
    </button>
  </form>
  
</template>
