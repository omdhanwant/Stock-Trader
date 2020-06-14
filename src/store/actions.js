import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then( response  => response.json())
        .then(data => {
            if(data) {
                const funds = data.funds;
                const stocks = data.stocks;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    funds,
                    stockPortfolio
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        })
}