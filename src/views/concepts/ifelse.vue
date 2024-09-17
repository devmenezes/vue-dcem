<script setup>

</script>

<template>
    <div class="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
        <!-- Esconder uma div ao clique de um botãoo -->
        <h1 class="rounded-md shadow-lg bg-gray-200 text-slate-700 text-6xl p-4">
            Este é um pop-up irritante!
        </h1>

        <button class="mt-4 bg-blue-400 font-semibold px-8 py-4 rounded-md shadow-lg">
            Fechar
        </button>
    </div>
 <div>
    <div class="max-w-7xl mx-auto text-center flex flex-col items-center justify-center space-y-4">
        <iframe width="500" height="500" src="https://www.openstreetmap.org/export/embed.html?bbox=-48.008537292480476%2C-15.866076442481347%2C-47.78194427490235%2C-15.711133006339473&amp;layer=mapnik" style="border: 1px solid black"></iframe>
        <button class="mt-4 bg-red-400 font-semibold px-8 py-4 rounded-md shadow-lg">
            Eu quero ver o pop-up
        </button>
    </div>
 </div>
</template>
