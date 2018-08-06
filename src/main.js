
import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios' // We'll switch the fixture out for a real request later on
import Vuex from 'vuex';
import substanceData from './fixtures/GetDrugsResponse.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        substances: {}
    },
    mutations: {
        updateSubstances(state, substances) {
            state.substances = substances;
        }
    }
})

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    created() {
        store.commit('updateSubstances', substanceData.data)
    }
})
