<template>
  <div id="app">
    <header-site></header-site>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSite from "@/components/HeaderSite.vue";

@Component({
  components: {
    HeaderSite
  }
})

export default class App extends Vue {
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

h2 {
  margin: 0;
}

p {
  margin: 0;
}

body {
  margin: 0;
}
</style>