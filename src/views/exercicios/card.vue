<script setup lang="ts">
import IconBandeira from "@/components/icons/IconBandeira.vue";
import IconCartao from "@/components/icons/IconCartao.vue";
</script>

<template>
  <div class="flex items-center justify-center space-x-4">
    <div class="p-8">
      <label class="block uppercase mb-[2rem] xl:mb-[2.6rem]">
        Nome do Cliente
        <input type="text" placeholder="NOME DO CLIENTE" class="form-input" />
      </label>
      <label class="block uppercase mb-[2rem] xl:mb-[2.6rem]">
        Número
        <input placeholder="1234 5678 9123 0000" class="form-input" />
      </label>
      <div class="flex gap-[2rem] mb-[2.8rem] xl:mb-[4rem] invalid:mb-[2.6rem]">
        <fieldset class="flex flex-col">
          <legend class="uppercase">Data Exp</legend>
          <div class="flex shrink-0">
            <input
              type="number"
              min="01"
              max="12"
              placeholder="Mês"
              class="mr-1 form-input"
            />
            <input
              type="number"
              min="25"
              placeholder="Ano"
              class="form-input"
            />
          </div>
        </fieldset>
      </div>
        <fieldset class="flex space-x-4">
          <legend class="uppercase">Bandeira</legend>
          <div class="flex shrink-0">
            <input
              type="radio"
              value="/dcem.png"
              class="mr-1"
            />
            DCEM
          </div>
          <div class="flex shrink-0">
            <input
            checked
              type="radio"
              value="/eb.png"
              class="mr-1"
            />
            EB
          </div>
        </fieldset>
    </div>
    <div class="cartao">
      <div class="flex justify-between m-2">
        <IconCartao />
        <IconBandeira />
      </div>
      <div class="flex justify-center mt-4">
        <h1 class="font-thin text-gray-400 font-os">XXXX XXXX XXXX 0000</h1>
      </div>
      <div class="flex flex-col p-4 mt-4 text-gray-400 justfiy-end font-quick">
        <p class="text-base font-bold">12 / 17</p>
        <h4 class="text-base font-semibold tracking-wider uppercase">
          NOME DO CLIENTE
        </h4>
      </div>
      <img class="absolute h-10 right-2 bottom-2" src="/eb.png" />
    </div>
  </div>
</template>

<style scoped>
.cartao {
  @apply text-xl w-80 h-52 border border-gray-500 border-l-gray-700 border-t-gray-500 rounded-lg shadow-lg bg-gradient-to-br from-black via-slate-800 to-black relative;
}
.form-input {
  @apply block w-full mt-2 rounded-md border border-gray-800 shadow-sm px-4 py-2 text-white bg-gray-900 uppercase;
}
</style>
