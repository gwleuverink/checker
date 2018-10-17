<template>
  <div class="checker-view">
    <div class="checker-date">
      <checker-datepicker
        v-model="filters.date.value" />
    </div>

    <div class="checker-filters">

      <select v-model="filters.testType">
        <option disabled :value="null">select a test type</option>
        <option
            v-for="(option, key) in testTypes"
            :key="key"
            :value="option.value">{{ option.value }}
        </option>
      </select>
      |
      <select v-model="filters.substanceType">
        <option :value="null">Anything</option>
        <option
            v-for="(option, key) in substanceTypes"
            :key="key"
            :value="option.value">{{ option.value }}
        </option>
      </select>

    </div>
        <div class="checker-results">
            <ul>
                <checker-substance
                    v-for="(substance, index) in filteredSubstances"
                    :substance="substance"
                    :key="index"
                    @hallo="showDetails()"
                />
            </ul>
        </div>

    </div>
</template>

<script>

import substance from './components/substance';
import datepicker from 'vuejs-datepicker';
import filterable from './filters'
import selectInput from './components/inputs/select';
import infoModal from './components/infoModal';

export default {
  name: 'app',

  data: () => ({
    filters: {
        testType: {
          type: 'map',
          value: null
        },
        substanceType: {
            type: 'filter',
            value: null
        },
        date: {
            type: 'filter',
            value: Date.now()
        }
    },
    testTypes: [
      { value: 'blood' },
      { value: 'urine' },
      { value: 'salive' }
    ],
    substanceTypes: [
      { value: 'Stimulant' },
      { value: 'Psychadelic' },
      { value: 'Opiates' },
      { value: 'Cannabiniods' }
    ],
  }),

  components: {
    'checker-substance': substance,
    'checker-datepicker': datepicker,
    'checker-select': selectInput
  },
  computed: {
    filteredSubstances() {
        const filters = this.filters
        let substances = this.$store.state.substances

        // Iterate over all filter names
        for(let filterName of Object.keys(filters)) {

            let filter = filters[filterName]

            // Check if they have a value
            if (filter && filter.value !== null) {

                // Get the actual filter function used from the filterable object
                let closure = filterable[filterName]

                // Aaaaand apply TODO: execute collection method based on filter type (e.g. filter or map)
                substances = substances.filter(
                    (substance, filter) => closure(substance, filters)
                )
            }
        }
        return substances
    }
  }
}

</script>

<style lang="scss">

    @import './scss/app.scss';

    .vdp-datepicker {
      width: 100%;

      input {
        background: none;
        border: 0;
        box-shadow: none;
        font-size: 3rem;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        width: 100%;
        text-align: center;
      }
    }

    body,
    html {
        height: 100vh;
        overflow: hidden;
    }

    $checker-date-height: 20vh;
    $checker-filter-height: 8vh;

    .checker-date {
        display: flex;
        align-items: center;
        align-content: center;
        height: $checker-date-height;
    }

    .checker-filters {
        background: white;
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
