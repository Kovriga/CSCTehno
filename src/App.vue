<template>
  <div id="app">
    <header-site></header-site>
    <div class="center-component-mesh">
      <div class="filter">
        <filter-table></filter-table>
      </div>
      <div class="table-data"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSite from "@/components/HeaderSite.vue";
import FilterTable from "@/components/FilterTable.vue";

@Component({
  components: {
    FilterTable,
    HeaderSite
  }
})

export default class App extends Vue {
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#app {
  height: 100vh;
  background: #E5E5E5;
}

.center-component-mesh {
  display: flex;
}

.filter, .table-data {

}

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