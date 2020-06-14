
<template>
    <div class="row">
        <Stock v-for="(stock, i) in stocks" :key="i"  :stock="stock"></Stock>
    </div>
</template>

<script>
import { mapGetters } from  'vuex';
import Stock from './Stock'

export default {
    components: {
        Stock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        }
        )
    }
}
</script>