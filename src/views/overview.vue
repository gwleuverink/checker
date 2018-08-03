<template>
    <div>

        days to test
        overview

        <ul>
            <checker-substance />
        </ul>

        <button @click="$emit('navigateTo', 0)">
            Start opnieuw
        </button>
    </div>
</template>

<script>

import substance from '../components/substance.vue';

export default {
    components: {
        'checker-substance': substance
    }
}
</script>
