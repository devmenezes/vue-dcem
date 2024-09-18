<script setup>
const itens = [
  {
    categoria: "Eletrônicos",
    produtos: [
      { nome: "Celular", preco: 1500 },
      { nome: "Notebook", preco: 3000 },
      { nome: "Fone de Ouvido", preco: 200 },
      { nome: "Smartwatch", preco: 800 },
      { nome: "Televisão", preco: 2500 },
    ],
  },
  {
    categoria: "Roupas",
    produtos: [
      { nome: "Camiseta", preco: 50 },
      { nome: "Calça", preco: 100 },
      { nome: "Jaqueta", preco: 200 },
      { nome: "Vestido", preco: 150 },
      { nome: "Sapato", preco: 300 },
    ],
  },
  {
    categoria: "Alimentos",
    produtos: [
      { nome: "Maçã", preco: 3 },
      { nome: "Banana", preco: 2 },
      { nome: "Arroz", preco: 20 },
      { nome: "Feijão", preco: 10 },
      { nome: "Azeite", preco: 30 },
    ],
  },
];
</script>

<template>
  <div class="flex flex-col w-full max-w-4xl space-y-4 text-gray-900">
    <div
      class="flex flex-row items-center overflow-hidden bg-white divide-x-2 rounded-md shadow-lg"
    >
      <p
        class="flex items-center h-full px-4 text-4xl font-semibold text-blue-900 bg-blue-400"
      >
        CATEGORIA
      </p>
      <ul class="p-4">
        <li class="flex justify-between my-2">
          <span class="mr-4 font-semibold">Produto 1</span>
          <span> R$ 1000,00</span>
        </li>
      </ul>
    </div>
  </div>
</template>
