<script setup lang="ts">
import { ref } from 'vue';
import router from '/src/router';

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
    <v-app class="background">
        <v-container class="www">
    <div class="discover-card">
      <p class="discover">
        Discover a world where beauty comes <br> 
        alive and every flower whispers the <br> 
        uniqueness of a moment
      </p>
    </div>
  <div>
    <v-btn @click="router.push('/Page1')" class="order" variant="text"> 
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
  
    </v-app>
</template>

<style scoped>
@import '/src/assets/styles.css';
</style>