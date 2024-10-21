<script setup>
// Use
// Math.floor(Math.random() * 100)
// para gerar um número aleatório de 0 a 99

// crie uma referência reativa para guardar esse número

// mostre o número na caixa branca (reatividade)

//trocar por uma ref
const numero = 1;

</script>

<template>
  <div class="box">
    <!-- Mostre o número (reativo) -->
    1
    <!-- no lugar deste 1 fixo -->
  </div>
  <button @click="randomNumber">Alterar</button>
</template>
