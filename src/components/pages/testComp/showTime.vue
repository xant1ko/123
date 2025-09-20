<script>
import { ref, onMounted, onUnmounted} from 'vue';

export default {
    setup() {
        const time = ref('')
        let timerId = null

        onMounted(() => {
            const now = new Date()
            time.value = now.toLocaleTimeString('ru-RU')
            
            timerId = setInterval(() =>{
                time.value = new Date().toLocaleTimeString('ru-RU')
            }, 1000)
            })
        onUnmounted(() => {
            if (timerId) clearInterval(timerId)
        })
        
        return {
            time
        }
    }
}


</script>




<template>
    <v-col style="max-width: 400px;" class="back" >
        <h1>Текущее время - {{ time }}</h1>
    </v-col>
</template>