<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import headerCustom from './components/header-custom.vue';
import { ref, onMounted } from 'vue';
import router from './router';

const isLabel = ref<boolean>(false)

function showLabel() {
  isLabel.value = true
  setTimeout(() =>{ isLabel.value = false}, 5000)
}

onMounted(() =>{ showLabel() })
</script>

<template>
  <v-app class="background">
  <headerCustom/>
  <RouterView/>
  <footerCustom/>
  </v-app>
</template>
<style scoped>
@import '/src/assets/styles.css';
</style>

