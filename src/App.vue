<template>
  <div id="app">
    <header-site></header-site>
    <div class="center-component-mesh">
      <filter-table></filter-table>
      <div>
        <sort-by></sort-by>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import HeaderSite from "@/components/HeaderSite.vue";
import FilterTable from "@/components/FilterTable.vue";
import SortBy from "@/components/SortBy.vue";

@Component({
  components: {
    SortBy,
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
  margin-top: 32px;
  justify-content: center;
  display: flex;
}

.center-component-mesh > div:last-child {
  width: 65%;
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