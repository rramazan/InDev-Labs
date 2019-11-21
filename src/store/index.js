import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const http = axios.create({
    baseURL: 'https://api.kraken.com/0/public/Ticker?pair=ETHUSD,ETHEUR,ETHCAD,ETHJPY,ETHGBP',
    timeout: 1000,
});
export default new Vuex.Store({
    state: {
        list:[],
        errorMessage: null,
    },
    mutations: {
        fillList(state, list) {
            state.list = [];
            for(let item in list) {
                state.list.push({
                        Pair: item.replace('Z', '-').replace('X', ''),
                        Bid: list[item].b[0],
                        Ask: list[item].a[0]
                    })
            }
        },
        throwErrorMessage(state, message) {
            state.errorMessage = message;
        }
    },
    actions: {
        async init({commit, dispatch}) {
            try {
                let res = await http.get();
                if( res.data.error.length ) {
                    commit('throwErrorMessage', res.data.error[0]);
                } else {
                    commit('fillList', res.data.result);
                }
            } catch (e) {
                commit('throwErrorMessage', e);
            }
            setTimeout(() => dispatch('init'), 15000);
        }
    },
})
