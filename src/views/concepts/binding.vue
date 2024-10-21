<script setup>
import { ref } from "vue";
const imagem = ref('/wp1.jpeg')

const ramais  = [
    { "alias": "Recepção", "numero": 1012 },
    { "alias": "Permanência", "numero": 1045 },
    { "alias": "Seção de Controle Orçamentário", "numero": 1089 },
    { "alias": "Estado Maior Pessoal", "numero": 1123 },
    { "alias": "Assistente Geral", "numero": 1156 },
    { "alias": "Auxiliar Telefone Sem Fio", "numero": 1234 },
    { "alias": "Auxiliar Diretor", "numero": 1324, sigiloso: true },
    { "alias": "Auxiliar Sub Diretor", "numero": 1456 },
    { "alias": "Ajudância Geral", "numero": 1567 },
    { "alias": "Pagamento", "numero": 1678 },
    { "alias": "Protocolo", "numero": 1789 },
    { "alias": "Seção de Planejamento Estratégico", "numero": 1890 },
    { "alias": "Ouvidoria", "numero": 1901 },
    { "alias": "Assessoria de Tecnologia da Informação", "numero": 2012 },
    { "alias": "Cusos e Estágios", "numero": 2123, sigiloso: true  },
    { "alias": "Seção de Movimentação de Oficiais do QEMA", "numero": 2234 },
    { "alias": "Seção de Movimentação de Oficiais do QSG", "numero": 2345 },
    { "alias": "Inteligência", "numero": 2456, sigiloso: true  },
    { "alias": "Seção de Apoio Jurídico", "numero": 2567, sigiloso: true  },
    { "alias": "Seção de Seleção", "numero": 2678, sigiloso: true  },
    { "alias": "Seção de Movimentação de Praças", "numero": 2789, sigiloso: true  },
    { "alias": "Auxiliar", "numero": 2890 }
]
</script>



<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th class="px-4 py-2">Alias</th>
        <th class="px-4 py-2">Número</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="ramal in ramais" :key="ramal.numero">
        <td class="border px-4 py-2">{{ ramal.alias }}</td>
        <td class="border px-4 py-2">{{ ramal.numero }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
