<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    parametersList: {
        type: Array,
        default: null,
    },
    price: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
})
</script>

<template>
    <v-col>
    <v-container class="card-back">
        <v-row>
            <v-col>
                картинка
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <p>{{ name }}</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-row>
                    <label>{{ 'Parameters' }}</label>
                </v-row>
                <v-row v-for="i in parametersList.length">
                    <v-col>
                        <label>{{ '- ' + parametersList[i-1] }}</label>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <label v-if="!discount">{{ 'Price = $' + price }}</label>
                <label v-if="discount">{{ 'Price = $' + (price-Discount) }}</label>
                <label v-if="discount">{{ price }}</label>
            </v-col>
        </v-row>

        <v-row>
            <v-btn>
                Buy
            </v-btn>
        </v-row>











    </v-container>
    </v-col>
</template>
x
<style scoped>
.v-col {
    padding: 0px;
}
.v-container {
}
.card-back {
    background-color: antiquewhite;
    text-align: center;
    padding: 0px;
}
</style>






 