<template>
    <div>

        days to test
        overview

        <ul>
            <checker-substance
                v-for="(substance, index) in filteredSubstances"
                :substance="substance"
                :key="index"
            />
        </ul>

        <button @click="$emit('navigateTo', 0)">
            Start opnieuw
        </button>
    </div>
</template>

<script>

import substance from '../components/substance.vue';

export default {
    computed: {
        filteredSubstances() {
            return this.$store.state.substances
        }
    },
    components: {
        'checker-substance': substance
    }
}
</script>
