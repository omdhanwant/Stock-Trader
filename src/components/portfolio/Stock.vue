<template>
      <div class="col-6 mb-5">
          <div class="card-header">
<h5 class="card-title">Name: {{stock.name}} <small> (Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small></h5>
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
                :class="{danger: insufficientQuantity}">
            </div>
            <div class="col-4">
                <button class="btn btn-danger"
                    @click="sell"
                    :disabled="insufficientQuantity || !quantity || quantity <= 0">
                    Sell Funds</button>
            </div>

            <div v-if="insufficientQuantity" class="col-6 mt-2">
                <h6 style="color: red;">Insufficient Quantity!</h6>
            </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data: () => {
        return {
            quantity: null
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
      ...mapActions([
          'sellStock'
      ]),
      sell() {
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: this.quantity,

          }

          this.sellStock(order);
          this.quantity = 0;
      }
    }
}
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>