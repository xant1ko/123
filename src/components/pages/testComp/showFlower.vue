<script setup lang="ts">
import { ref, watch } from 'vue';

const inputText = ref<String>('')
const isLabel = ref<Boolean>(false)

function showLabel() {
  isLabel.value = true
  setTimeout(() =>{ isLabel.value = false }, 1000)
}

watch(inputText,() => { showLabel()})
</script>

<template>
    <v-col style="max-width: 200px;">
        <textarea v-model="inputText"
      style="border-style: solid; border-radius: 10px;"></textarea>
      <v-img 
      src="/src/components/pages/cards/img/first.png"
      v-if="isLabel"
      :width="200">
    </v-img>
    </v-col>
</template>