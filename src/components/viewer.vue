
<template>
    <transition name="slide">
        <component
            :is="activeView"
            v-on:navigateTo="navigateTo"
            class="view"
        />
    </transition>
</template>

<script>

import selectDate from '../views/selectDate';
import disclaimer from '../views/disclaimer';
import selectType from '../views/selectType';
import overview from '../views/overview';


export default {
    components: {
        'checker-disclaimer': disclaimer,
        'checker-select-date': selectDate,
        'checker-select-type': selectType,
        'checker-overview': overview
    },
    data() {
        return {
            views: [
                'checker-disclaimer',
                'checker-select-date',
                'checker-select-type',
                'checker-overview',
            ],
            activeView: null,
        }
    },
    props: [

    ],
    mounted() {
        this.activeView = this.views[0]
    },
    methods: {
        navigateTo(index) {
            this.activeView = this.views[index]
        }
    }
}
</script>

