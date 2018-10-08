<template>
  <div>
    <div class="checker-date">
      <checker-datepicker
        v-model="filters.date" />
    </div>

    <div class="checker-filters">
        filter test-type | filter drug-type
    </div>

    <div class="checker-results">
      <ul>
          <checker-substance
              v-for="(substance, index) in filteredSubstances"
              :substance="substance"
              :key="index"
          />
      </ul>
    </div>
  </div>
</template>

<script>

import substance from './components/substance';
import datepicker from 'vuejs-datepicker';

export default {
  name: 'app',

  data: () => ({
    filters: {
      date: Date.now()
    }
  }),

  components: {
    'checker-substance': substance,
    'checker-datepicker': datepicker
  },
  computed: {
    filteredSubstances() {
      return this.$store.state.substances
    }
  },
}

</script>

<style lang="scss">

    @import './scss/app.scss';

  .view {
      align-items: center;
      background: pink;
      bottom: 0;
      display: flex;
      flex-direction: column;
      left: 0;
      position: absolute;
      right:0;
      top: 0;
  }
</style>
