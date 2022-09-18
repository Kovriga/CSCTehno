<template>
  <div class="header-site">
    <h2>
      Тестовое задание
    </h2>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component

export default class HeaderSite extends Vue{
}
</script>

<style lang="scss" scoped>
h2{
  margin-left: 110px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.header-site {
  align-items: center;
  display: flex;
  height: 260px;
  background: linear-gradient(267.21deg, #900793 0.16%, rgba(134, 4, 137, 0.785707) 0.16%, rgba(159, 12, 162, 0.762269) 43.22%, rgba(5, 1, 190, 0.734375) 98.12%, rgba(0, 28, 126, 0.619792) 100.15%, rgba(6, 77, 142, 0.447917) 102.03%, rgba(1, 0, 60, 0) 102.73%);
}
</style>