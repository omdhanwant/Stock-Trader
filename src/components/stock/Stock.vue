<template>
      <div class="col-6 mb-5">
          <div class="card-header">
<h5 class="card-title">Name: {{stock.name}} <small> (Price: {{stock.price | currency}})</small></h5>
          </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
            <div class="col-8">
                <input 
                type="number" 
                class="form-control" 
                placeholder="Quantity" 
                v-model="quantity"
                :class="{danger: insufficientFundsCheck}">
            </div>
            <div class="col-4">
                <button class="btn btn-success"
                    @click="buyStock"
                    :disabled=" insufficientFundsCheck || !quantity || quantity <= 0 ">
                    <!-- {{ insufficientFundsCheck ? 'Insufficient Funds' : 'Buy' }} -->
                    Buy Funds
                    </button>
            </div>

            <div v-if="insufficientFundsCheck" class="col-6 mt-2">
                <h6 style="color: red;">Insufficient Funds!</h6>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
    props: ['stock'],
    computed: {
        funds() {
            return this.$store.getters.funds;
        },

        insufficientFundsCheck() {
            return this.quantity * this.stock.price > this.funds
        }
    },
    data: () => {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
                const order= { 
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
                }
                this.$store.dispatch('buyStock', order)
        }
    }
}
</script>

<style scoped>
    .danger { 
        border: 1px solid red;
    }
</style>