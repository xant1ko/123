<script setup lang="js">
import showFlower from "/src/components/pages/testComp/showFlower.vue"
import showTime from "/src/components/pages/testComp/showTime.vue"
</script>

<template>
  <v-container max-width="800" class="www" >
    <v-row>
      <showFlower/>
      <showTime/>
    </v-row>
  </v-container>
</template>

<style>
@import '/src/components/pages/cards/stylesCards.css'
</style>