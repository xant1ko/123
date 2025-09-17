<script setup lang="ts">
import productCard from '../productCard.vue';
import { ref } from 'vue'

const products = ref<Object[]>([
  {
    name: 'Roses',
    price: 3000,
    params: [
      'exquisite',
      'expensive',
    ],
  },
  {
    name: 'Вaisies',
    price: 1500,
    params: [
      'field',
      'cute',
    ],
  },
  {
    name: 'Poppy',
    price: 3000,
    params: [
      'incapacitates',
      'priceless',
    ],
  }
])

const productWithDiscount = ref<Object>([
  {
    name: 'Оленья голова',
    price: 6999,
    Discount: 999,
    params: [
      'настоящая',
      'красиво висит на стене',
    ],
  },
  {
    name: 'Банка окурков',
    price: 500,
    Discount: 50,
    params: [
      'аутентично выглядит',
      '+вайб',
    ],
  },
])
</script>

<template>
    <v-container class="productList">
    <v-row justify="center">
      <productCard
            v-for="p in products"
            :name="p.name"
            :price="p.price"
            :parametersList="p.params"
            class="card"/> 
      <productCard
            v-for="p in productWithDiscount"
            :name="p.name"
            :price="p.price"
            :discount="p.discount"
            :parametersList="p.params"
            class="card"
      />
    </v-row>
  </v-container>
</template>

<style scoped>
.productList {
    margin-top: 100px;
    max-width: 1200px;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
}
</style>