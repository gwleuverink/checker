import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import substances from './fixtures/GetDrugsResponse.js';
// import axios from 'axios' // We'll switch the fixture out for a real request later on

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    created() {
        this.$store.commit('updateSubstances', substances.data)
    }
})
