<script setup>
import { ref } from "vue";
const imagem = ref('/wp1.jpeg')

const wallpapers = [
  '/wp1.jpeg',
  '/wp2.jpeg',
  '/wp3.jpeg',
  '/wp4.jpeg',
  '/wp5.jpeg',
]

setInterval(() => {
  const index = Math.floor(Math.random() * wallpapers.length)
  imagem.value = wallpapers[index]
}, 2000)

</script>



<template>
  <p class="text-4xl font-semibold mb-4">
  Atual: {{ imagem }}
</p>
  <img src="/wp3.jpeg" alt="Google" class="w-[640px] h-[400px] rounded-md shadow-xl bg-white border-2 border-white reflec " />
</template>

<style scoped>
.box{
    @apply w-48 h-48 rounded-md shadow-lg bg-white text-8xl text-gray-950 flex items-center justify-center mt-4
}
</style>
