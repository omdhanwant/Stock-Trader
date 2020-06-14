<template>
    <div class="row">
        <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
    </div>
</template>

<script>
import Stock from './Stock'
export default {
    name:'Stocks',
    components: {
        Stock
    },
    computed : {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>