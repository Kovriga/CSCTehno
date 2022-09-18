<template>
  <div>
    <h1>Table</h1>
    <div class="table">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Номер накладной</th>
          <th>Тип заказа</th>
          <th>Дата создания</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>The table body</td>
          <td>The table body</td>
          <td>The table body</td>
          <td>The table body</td>
          <td>
            <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M4 1.75C4 0.7875 3.1 0 2 0C0.9 0 0 0.7875 0 1.75C0 2.7125 0.9 3.5 2 3.5C3.1 3.5 4 2.7125 4 1.75ZM4 12.25C4 11.2875 3.1 10.5 2 10.5C0.9 10.5 0 11.2875 0 12.25C0 13.2125 0.9 14 2 14C3.1 14 4 13.2125 4 12.25ZM4 7C4 6.0375 3.1 5.25 2 5.25C0.9 5.25 0 6.0375 0 7C0 7.9625 0.9 8.75 2 8.75C3.1 8.75 4 7.9625 4 7Z"
                  fill="#647A8C"/>
            </svg>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component

export default class Table extends Vue {

}
</script>

<style lang="scss" scoped>
tr {
  background-color: white;
  height: 40px;
  border-bottom: none;
}

tr:last-child {
  border-bottom: 4px solid white !important;
}

table {
  margin-left: 16px;
  width: 100%;
}

th:not(:last-child) {
  border-right: #E5E5E5 3px solid;
}

th {
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  background: #E6E6E6;
}
</style>