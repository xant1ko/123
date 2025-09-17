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
    <v-col cols="4" md="3" sm="2">
    <v-container class="card-back">
        <v-row>
            <v-col>
                <p class="name-text">{{ name }}</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-row style="padding-top: 5px;">
                    <v-col class="paramspar">
                    <p>Parameters</p>
                    </v-col>
                </v-row>
                <v-row v-for="i in parametersList.length" class="params">
                    <v-col>
                        <label>{{ '- ' + parametersList[i-1] }}</label>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row style="padding-top: 10px;">
            <v-col class="price">
                <label v-if="!discount">{{ 'Price = $' + price }}</label>
                <label v-if="discount">{{ 'Price = $' + (price-Discount) }}</label>
                <label v-if="discount">{{ price }}</label>
                <v-btn variant="text" class="params">
                    Buy
                </v-btn>
            </v-col>
            
        </v-row>

    </v-container>
    </v-col>
</template>

<style scoped>
.v-col {
}
.v-container {
}
.card-back {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 10px;
    border-radius: 20px;
    backdrop-filter: blur(9px);
}
.name-text {
    font-family: 'helvetica_bold';
    text-align: center;
    font-size: 30px;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    
}
.price {
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Inter-regular';
    padding-top: 10px;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
}
.params {
    text-align: center;
    font-family: 'Inter';
}
.paramspar {
    text-align: center;
    font-family: 'Inter-Regular';
}
.v-col {
    padding: 2px;
}
.v-btn {
    padding: 2px;
    margin: -2px;
}

</style>






 