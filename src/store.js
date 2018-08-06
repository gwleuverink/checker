import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        substances: {}
    },
    mutations: {
        updateSubstances(state, substances) {
            state.substances = substances;
        }
    }
})