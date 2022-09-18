<template>
  <div class="filter-component">
    <div class="heder--filter">
      <h3>Фильтр</h3>
    </div>
    <div class="body--filter">
      <div>
        <label>Номер накладной:</label>
        <input type="text" id="mike" value="Майк" placeholder="Введите фрагмент" @keyup.enter="search()" v-model="checkedNames">
      </div>
      <div>
        <label for="mike">Тип заказа:</label>
        <select v-model="selected">
          <option disabled value="Выберете из списка">Выберете из списка</option>
          <option :value="'Pickup'">Самовывоз</option>
          <option :value="'Delivery'">Курьерская доставка</option>
          <option :value="'Pick-point'">Доставка в пункт выдачи</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";

@Component

export default class FilterTable extends Vue {
  selected = '';
  checkedNames = '';

  @Watch('checkedNames')
  setSearch(): void {
    if(this.checkedNames === '') {
      this.$store.commit('getSearch', '');
    }
  }

  @Watch('selected')
  getSeach(): void {
    this.$store.commit('setParamsSearch', this.selected);
  }

  search(): void {
    this.$store.commit('getSearch', this.checkedNames)
  }

}
</script>

<style lang="scss" scoped>
label{
  margin-bottom: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
}
.body--filter{
  display: flex;
  flex-direction: column;
}

.body--filter > div {
  display: flex;
  margin:8px 16px ;
  flex-direction: column;
}

.body--filter > div > input, select {
  padding:8px 12px;
  width: auto;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
}
.body--filter > div > select {
  position: relative;
  appearance: none
}

.body--filter > div > select:after {
  content: "";
  display: block;
  border-style: solid;
  border-width: 6px 5px 0 5px;
  border-color: #000 transparent transparent transparent;
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 1rem;
  z-index: 1;
  margin-top: -3px;
}

.heder--filter {
  padding: 8px 16px;
  border-bottom: 1px solid #F8F8F8;
}

h3 {
  margin: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #2B2839;
}

.filter-component {
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));
  width: 280px;
  height: 184px;
  background: #FFFFFF;
}
</style>