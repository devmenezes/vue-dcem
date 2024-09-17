<!-- Obrigatoriamente um componente deve ter pelo menos uma tag script ou uma tag template -->
<!-- Sem isso não é considerado um componente -->
<script setup>
</script>

<!-- A ordem dos elementos não importa -->
<template>
    <h1 class="big-text">PRIMEIRO COMPONENTE</h1>
    <p>Este é o primeiro componente criado no projeto.</p>
</template>

<style scoped>
    .big-text {
        font-size: 2rem;
    }

    .big-text:hover {
        @apply text-red-300
    }
</style>
