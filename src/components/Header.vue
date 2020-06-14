<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/"><a class="navbar-brand">Stock Trader</a></router-link>
  
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <strong class="funds">Funds: {{ funds | currency}}</strong>
    <ul class="navbar-nav">
      
      <router-link to="/portfolio"  activeClass="active" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
      <router-link to="/stocks" activeClass="active" class="nav-item"><a class="nav-link">Stocks</a></router-link>

      <li>
      <a @click="endDay" class="nav-link">End Day</a>
      </li>

      <li class="nav-item dropdown open">
        <a class="nav-link dropdown-toggle" @click="toggleDropDown" >
          Load & save
        </a>
        <div class="dropdown-menu" :style="{display: toggle ? 'block' : 'none'}">
          <a class="dropdown-item" @click="load">Load</a>
          <a class="dropdown-item" @click="save">Save</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data: () => {
        return {
            toggle: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions([
            'randomizeStocks',
            'loadData'
        ]),
        endDay() {
            this.randomizeStocks();
        },
        toggleDropDown() {
            this.toggle = !this.toggle
        },
        save() {
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            }

            this.$http.put('data.json', data);
        },
        load() {
            this.loadData();
        }
    }
}
</script>

<style scoped>
    .funds {
        border: 1px solid;
        padding: 3px;
    }
</style>