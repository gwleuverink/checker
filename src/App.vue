<template>
  <div>
    <div class="checker-date">
      <checker-datepicker
        v-model="filters.date" />
    </div>

    <div class="checker-filters">

      <checker-select
        :options="testTypes"
        label="value"
      ></checker-select>
      |
      <checker-select
        :options="testTypes"
        label="value"
      ></checker-select>

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
import selectInput from './components/inputs/select'

export default {
  name: 'app',

  data: () => ({
    filters: {
      date: Date.now()
    },
    testTypes: [
      { value: 'blood' },
      { value: 'urine' },
      { value: 'salive' }
    ],
    substanceTypes: [
      { value: 'blood' },
      { value: 'urine' },
      { value: 'salive' }
    ]
  }),

  components: {
    'checker-substance': substance,
    'checker-datepicker': datepicker,
    'checker-select': selectInput
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
