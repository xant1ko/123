<script setup lang="ts">
import { ref } from 'vue';
import router from "/src/router";
import firstCard from "/src/components/pages/cards/1stCard.vue"
import secondCard from "/src/components/pages/cards/2ndCard.vue"
import thirdCard from "/src/components/pages/cards/3rdCard.vue"
import fourstCard from "/src/components/pages/cards/4stCard.vue"
import fivestCard from "/src/components/pages/cards/5stCard.vue"
import sixstCard from "/src/components/pages/cards/6stCard.vue"

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
  <div style="margin-bottom: 40px;">
  <v-container class="www" style="min-height: auto;">
    <v-row style="padding-bottom: 40px;">
      <p class="textPink">Popular Bouquets</p>
    </v-row>
    <v-row aligh="start">
      <v-col style="max-width: 400px; padding-right: 30px;">
       <firstCard/>
      </v-col >
      <v-col style="max-width: 270px;">
       <secondCard/>
      </v-col>
      <v-col style="max-width: 270px;">
       <thirdCard style="margin-left: 90%;"/>
      </v-col>
      </v-row>
  </v-container>
  <v-container class="www" style="min-height: auto; margin-top: 60px;">
    <v-row>
    <v-col style="max-width: 270px;" cols="3">
      <fourstCard/>
    </v-col>
    <v-col style="max-width: 270px; margin-left: 20px;" cols="3">
    <fivestCard/>
    </v-col>
    <v-col style="max-width: 400px;">
      <sixstCard style="margin-left: 58%;"/>
    </v-col>
    </v-row>
  </v-container>
  </div>
  <div>
  </div>
    </v-app>
</template>

<style scoped>
@import '/src/assets/styles.css';
</style>