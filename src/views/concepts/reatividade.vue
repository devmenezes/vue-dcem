<script setup>

let numero = 87

const trocarNumero = function(){
    numero = Math.floor(Math.random() * 100)
    console.log("O novo número é "+numero)
}

</script>



<template>
      <div class="box">
        {{numero}}
      </div>
      <button @click="trocarNumero" class="mt-4 bg-blue-400 font-semibold px-8 py-4 rounded-md shadow-lg">
        Trocar Número
      </button>
</template>

<style scoped>
.box{
    @apply w-48 h-48 rounded-md shadow-lg bg-white text-8xl text-gray-950 flex items-center justify-center mt-4
}
</style>
