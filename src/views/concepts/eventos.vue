<script setup>
import { ref } from 'vue';

const  concorda = ref(false)

const verifica = function(){
    alert('Você precisa concordar')
}
</script>



<template>
      <p>
        {{ concorda }}
      </p>
      <div class="box">
        <form>
            <input type="checkbox" v-model="concorda" class="mr-4" />
            <label for="concorda">Concorda?</label>
            <button class="block mx-auto mt-3 bg-green-300 rounded-md px-4 py-2" @mouseover="verifica">
                Enviar
            </button>
        </form>
      </div>
</template>

<style scoped>
.box{
    @apply h-48 rounded-md shadow-lg bg-white text-xl text-gray-950 flex items-center justify-center mt-4
}
</style>
