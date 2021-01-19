<template>
<div>
    <!-- <h1>Trade or view your portfolio</h1>
    <h6>You may save & load your data</h6>
    <h6>Click on 'End Day' to begin a 'New Day'</h6>
    <hr>
    <p>Your funds: <strong>{{ funds | currency }}</strong></p> -->


    <div class="card">
  <div class="card-header">
    Trade or view your portfolio
  </div>
  <div class="card-body">
    <h5 class="card-title">You may save & load your data</h5>
    <p class="card-text">Click on 'End Day' to begin a 'New Day'</p>
    <p>Your funds: <strong>{{ funds | currency }}</strong></p>
    <button @click="$router.push('stocks')" class="btn btn-secondary">Buy More Funds</button>
  </div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        funds() {
          return this.$store.getters.funds
        } 
    }
}
</script>

<style scoped>
.card {
        margin: auto 10rem;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .card {
        margin: auto 5rem;
}    
}
</style>