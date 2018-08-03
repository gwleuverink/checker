<template>
  <div id="app">
    <checker-viewer />
  </div>
</template>

<script>

import viewer from './components/viewer.vue';

export default {
  name: 'app',
  components: {
    'checker-viewer': viewer
  },
  // Method to set localstorage 'accepted_disclaimer' to true
  // Look up if user localStorage has 'accepted_disclaimer', if true check for date/type else view is
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
