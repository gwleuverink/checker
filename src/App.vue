<template>
  <div class="checker-view">
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

    body,
    html {
        height: 100vh;
        overflow: hidden;
    }

    $checker-date-height: 25vh;
    $checker-filter-height: 10vh;

    .checker-date {
        display: flex;
        align-items: center;
        align-content: center;
        height: $checker-date-height;
    }

    .checker-filters {
        height: $checker-filter-height;
        display: flex;
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        &__filter {
            width: 50%;
            text-align: center;
        }
    }

    .checker-results {
        padding: 1em;
        $calc: $checker-date-height + $checker-filter-height;
        height: calc(100vh - #{$calc});
        overflow-y: scroll;
    }

    .checker-view {
        background: #ff3f68;
    }
</style>
