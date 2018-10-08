<template>
  <div>
    <div class="checker-date">
      datepicker here
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

export default {
  name: 'app',
  components: {
    'checker-substance': substance,
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
