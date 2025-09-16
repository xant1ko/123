<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headerCustom from './components/header-custom.vue';
import productCard from './components/productCard.vue'
import { ref } from 'vue';

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
    discount: 999,
    params: [
      'настоящая',
      'красиво висит на стене',
    ],
  },
  {
    name: 'Банка окурков',
    price: 500,
    discount: 50,
    params: [
      'аутентично выглядит',
      '+вайб',
    ],
  },
])
</script>

<template>
  
  <v-app class="background">
  <headerCustom/>
  <v-container class="www">
    <div class="discover-card">
      <p class="discover">
        Discover a world where beauty comes <br> 
        alive and every flower whispers the <br> 
        uniqueness of a moment
      </p>
    </div>
  <div>
    <v-btn class="order" variant="text"> 
      Order a bouquet
    </v-btn>
  </div>
  <div>
    <p class="we-create">
      We create floral arrangements that highlight the <br>
     natural beauty and uniqueness of each flower, <br>
      bringing a sense of light, freshness and <br>
      harmony to your home or event.
    </p>
  </div>
  </v-container>
  <v-container>
    <v-row justify="center">
      <productCard
            v-for="p in products"
            :name="p.name"
            :price="p.price"
            :parametersList="p.params"
            /> 
      <productCard
            v-for="p in productWithDiscount"
            :name="p.name"
            :price="p.price"
            :discount="p.discount"
            :parametersList="p.params"
      />
    </v-row>
  </v-container>
  </v-app>

  <RouterView />
</template>
<style scoped>
@import '/src/assets/styles.css';
</style>

